<template>
    <Dialog :options="{ size: '3xl' }" v-model="dialogVisible" >
        <template #body-title>
            <h3>ANT Closing Shift</h3>
        </template>

        <template #body-content>
            <!-- Spinner at the top -->
            <div class="w-full flex justify-center mb-2" v-if="mode.isLoading">
                <Spinner class="w-5 h-5" />
            </div>

            <table class="w-full mt-2">
                <thead>
                    <tr class="text-left text-sm border-b">
                        <th class="pb-2 w-48">Mode of Payment</th>
                        <th class="pb-2 w-32">Opening Amount</th>
                        <th class="pb-2 w-32">Closing Amount</th>
                        <th class="pb-2 w-32">Expected Amount</th>
                        <th class="pb-2 w-32">Difference</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index) in data" :key="index" class="border-b">
                        <td class="py-2 pr-4 w-48">{{ row.mode_of_payment }}</td>
                        <td class="py-2 px-1">
                            <FormControl
                                type="number"
                                size="sm"
                                variant="subtle"
                                disabled="true"
                                v-model="row.opening"
                            />  
                        </td>
                        <td class="py-2 px-1">
                            <FormControl
                                type="text"
                                inputmode="decimal"
                                step="any"
                                size="sm"
                                variant="subtle"
                                v-model="row.closing"
                                @input="updateDifference(index)"
                            />
                        </td>
                        <td class="py-2 px-1">
                            <FormControl
                                type="number"
                                size="sm"
                                variant="subtle"
                                disabled="true"
                                v-model="row.expected"
                            />
                        </td>
                        <td class="py-2 px-1">
                            <FormControl
                                type="number"
                                size="sm"
                                variant="subtle"
                                disabled="true"
                                :value="row.difference"
                            />
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr class="font-bold border-t">
                        <td class="py-2 pr-4">Total</td>
                        <td class="py-2 px-1">{{ totals.opening }}</td>
                        <td class="py-2 px-1">{{ totals.closing }}</td>
                        <td class="py-2 px-1">{{ totals.expected }}</td>
                        <td class="py-2 px-1">{{ totals.difference }}</td>
                    </tr>
                </tfoot>
            </table>

            <div class="flex justify-end gap-2 mt-4">
                <Button variant="ghost" @click="handleClose">Cancel</Button>
                <Button variant="solid" @click="handleSubmit.fetch({ action: 'Submit' })">Submit</Button>
            </div>
        </template>
    </Dialog>
</template>


<script setup>
    import { ref, inject, defineEmits, watch } from 'vue';
    import { Button, Dialog, FormControl, createResource, debounce,Spinner} from 'frappe-ui';
    import { createToast } from '../../utils';
    import { useDynamicComponent } from '../../utils/Dialog';


    const dialogVisible = ref(true);
    const base = inject('base');
    const openShiftVisible = ref(false);
    const data = ref(base.pos_profile.payments);
    let errorHandled = false;
    const { currentComponent, loadComponent } = useDynamicComponent();
    
    const totals = ref({
        opening: 0,
        closing: 0,
        expected: 0,
        difference: 0,
    });

   const updateDifference = debounce((index) => {
    const row = data.value[index];
    if (row) {
        row.difference = (row.expected || 0) - (row.closing || 0);
        calculateTotals();
    }
}, 100);

    let mode = createResource({
        url: "ant_pos.ant_pos.api.payment_entry.get_payments",
        method: "POST",
        makeParams() {
            return {
                shift: base?.Ant_Opening_Shift?.name
            };
        },
        auto: true,
        onSuccess(closingData) {
            
            createClosingShift(closingData);
        },
    });

    // const emits = defineEmits(['update:modelValue']);
    const emit = defineEmits(['switchComponent']);

    const createClosingShift = (closing) => {
        const newData = [];

        base.pos_profile.payments.forEach(element => {
            const openingDetail = base.Ant_Opening_Shift.opening_balance_details.find(
                item => item.mode_of_payment === element.mode_of_payment
            );
            
            const closingDetail = closing.find(
                item => item.mode_of_payment === element.mode_of_payment
            );
            
            const openingAmount = Number(openingDetail?.opening_amount) || 0;
            const closingTotal = Number(closingDetail?.total) || 0;
            
            newData.push({
                mode_of_payment: element.mode_of_payment,
                opening: openingAmount,
                expected: closingTotal + openingAmount,
                closing: closingTotal + openingAmount,
                difference: 0, 
            });
        });

        data.value = newData;
        calculateTotals();

    };
    const handleClose = async () => {
        dialogVisible.value = false;
        openShiftVisible.value = true;
        
        await loadComponent('OpenShift');

        

    };
    const handleSubmit = createResource({
        url: 'frappe.desk.form.save.savedocs',
        makeParams(params) {
            return {
                doc: JSON.stringify(
                    {
                        doctype:"Ant Closing Shift",
                        payment_reconciliation:data.value,
                        ant_opening_shift: base?.Ant_Opening_Shift?.name,
                    },
                ),
                action: params.action
            }
        },
        async onSuccess(data) {
        errorHandled = false;
        
        Object.assign(base, {
            customer: {},
            Ant_Opening_Shift: {},
            items: [],
            invoice: {},
            page: '',
        });
        
        dialogVisible.value = false;
        
        setTimeout(() => {
            currentComponent.value = null;
            emit('switchComponent', 'OpenShift');
        }, 100);
    },
        onError(error) {
                if (!errorHandled) {
                    createToast({
                        title: 'error',
                        message: Array.isArray(error?.messages) ? error.messages[0] : error?.messages  || 'An error occurred',
                        icon: 'x-circle',
                        iconClasses: 'bg-surface-red-5 text-ink-white rounded-md p-px',
                        position: 'top-center',
                        timeout: 5,
                    });
                    errorHandled = true;
                }
        },
    });

    const calculateTotals = () => {
        totals.value = {
            opening: data.value.reduce((sum, row) => sum + (Number(row.opening) || 0), 0),
            closing: data.value.reduce((sum, row) => sum + (Number(row.closing) || 0), 0),
            expected: data.value.reduce((sum, row) => sum + (Number(row.expected) || 0), 0),
            difference: data.value.reduce((sum, row) => sum + (Number(row.difference) || 0), 0),
        };
    };

    watch(data, calculateTotals, { deep: true });

    
</script>