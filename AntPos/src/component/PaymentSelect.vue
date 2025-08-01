<template>
    <div class="w-full h-[94%] flex p-2 gap-4">
        <div class="w-full h-full ">
            <div class="w-full h-full flex gap-6 ">
                <div class="w-[65%] h-full">
                    <div class="w-full h-full shadow-2xl p-4 rounded">
                        <div class="h-[6%]">
                            <Customer/>
                        </div>
                        <div class="w-full h-[94%] flex flex-col gap-4">
                            <TextInput type="text" v-model="searchQuery" placeholder="Search">
                                <template #prefix>
                                    <FeatherIcon class="w-4" name="search" />
                                </template>
                            </TextInput>
                            <div class="flex justify-evenly text-center bg-black-overlay-800 text-white rounded-md p-3 h-[6%] items-center">
                                <div class="w-[4%]">
                                    <input name="name" id="id" type="checkbox" :checked="selectAll"
                                    class="text-black rounded-sm focus:outline-none focus:ring-0 focus:border-transparent" @change="toggleAllSelection" />
                                </div>
                                <p class="w-[19%]">Name</p>
                                <p class="w-[19%]">Customer</p>
                                <p class="w-[19%]">Amount</p>
                                <p class="w-[19%]">Outstanding</p>
                            </div>
                            <div class="h-[92%] overflow-y-scroll rounded scrollbar-hide flex flex-col  gap-3 text-center">
                                <div v-if="filteredInvoices.length === 0" class="flex justify-center items-center h-full">
                                    <p class="text-gray-500">No invoices found</p>
                                </div>
                                <div v-for="invoice in filteredInvoices" :key="invoice.name" class=" w-full ">
                                    <div class="flex justify-evenly items-center rounded text-center bg-blue-200 p-2.5 ">
                                        <div class="w-[4%] ">
                                            <input name="name" id="id" type="checkbox" :checked="invoice.selected" 
                                            class="text-black rounded-sm focus:outline-none focus:ring-0 focus:border-transparent" @change="toggleSelection(invoice)" />
                                        </div>
                                        <p class="w-[19%]">{{ invoice.name }}</p>
                                        <p class="w-[19%]">{{ invoice.customer }}</p>
                                        <p class="w-[19%]">{{ invoice.grand_total }}</p>
                                        <p class="w-[19%]">{{ invoice.outstanding_amount }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-[35%] h-full">
                    <div class="w-full h-full shadow-2xl p-4 rounded flex flex-col justify-between">
    
                        <div class="flex flex-col gap-4">
                            <div class="flex flex-col gap-6 h-fit">
                                <div class="flex justify-evenly bg-black-overlay-800 text-white rounded-md p-3">
                                    <p>Payment Total</p>
                                </div>
                                    <TabButtons
                                        class=" flex "
                                        :buttons="[
                                        {
                                            label: 'Credit',
                                            value: 'credit',
                                        },
                                        {
                                            label: 'Advanced',
                                            value: 'advanced',
                                        },
                                        ]"
                                        v-model="currentTab"
                                    />
                                <FormControl
                                :type="'number'"
                                :ref_for="true"
                                size="sm"
                                variant="subtle"
                                placeholder="0"
                                :disabled="false"
                                label="Credit To Redeem"
                                v-model="base.paymentAmount"
                                @change="calculateAmountTotal"
                                />
                            </div>
                            <div>
                                <p class="text-2xl font-bold">Payment Method</p>
                                <div
                                    class="grid grid-cols-2 gap-4 p-2 items-center"
                                    v-for="(mode, index) in modes"
                                    :key="index"
                                >
                                    <FormControl
                                        type="number"
                                        size="sm"
                                        variant="subtle"
                                        placeholder="0"
                                        :disabled="false"
                                        :label="`${mode.mode_of_payment}:`"
                                        v-model="mode.amount"
                                    />
                                    <Button
                                        class="w-full h-full"
                                        :variant="'solid'"
                                        theme="gray"
                                        size="lg"
                                        label="Button"
                                        :loading="false"
                                        :disabled="false"
                                        @click="changemode(index)"
                                    >
                                        {{ mode.mode_of_payment }}
                                    </Button>
                                </div>
                                <FormControl
                                    type="number"
                                    size="sm"
                                    variant="subtle"
                                    placeholder="0"
                                    :disabled="true"
                                    v-model="base.diff"
                                    label="Difference:"
                                />
                            </div>
                        </div>
                        <div class="text-right">
                            <Button
                                class="w-full p-2 h-full"
                                :variant="'solid'"
                                theme="gray"
                                size="lg"
                                label="Button"
                                :loading="false"
                                @click="createpayment"
                                :disabled="!hasSelectedInvoice"
                                >
                                Submit
                                
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { createListResource, TextInput, FormControl, FeatherIcon, createResource,TabButtons } from 'frappe-ui';
import { ref, inject, computed, watch, onBeforeMount } from 'vue';
import Customer from './Customer.vue';
import { createToast } from '../utils';


let base = inject('base');
const searchQuery = ref("");
const currentTab = ref('credit');
const customerName = ref(base.customer.name);
const selectAll = ref(false);
    const modes = ref([]);
    let errorHandled = false;
    
    const invoices = createListResource({
        doctype: 'Sales Invoice',
        fields: ['name', 'customer', 'grand_total', 'outstanding_amount'],
        filters: { 
            outstanding_amount: [">", 0],
            docstatus: 1, 
            is_return: 0, 
            customer: customerName.value
        },
        orderBy: 'creation asc',
        pageLength: Number.MAX_VALUE * 2,
        transform(data) {
            for (let d of data) {
                d.selected= false
            }
            return data
        },
        pageLength: Number.MAX_VALUE * 2,
    });

    const filteredInvoices = computed(() => {
        if (!invoices.data || !customerName.value) {
            return [];
        }
        if (!searchQuery.value) {
            return invoices.data;
        }
        return invoices.data.filter(invoice =>
            invoice.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            invoice.customer.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    });
    const hasSelectedInvoice = computed(() => {
        if (currentTab.value === 'credit') return invoices.data?.some(inv => inv.selected);
        else if (currentTab.value === 'advanced') return customerName.value && modes.value.some(mode => mode.amount > 0);
        else return false;
    });


    
    const calculateAmountTotal = () => {
        let total = invoices.data.reduce((sum, invoice) => {
            return invoice.selected ? sum + invoice.grand_total : sum;
        }, 0);
        
        base.paymentAmount = total;
    };
    const toggleAllSelection = (event) => {
        if (event && event.stopPropagation) {
            event.stopPropagation(); 
        }

        selectAll.value = event.target.checked;
        invoices.data.forEach(invoice => {
            invoice.selected = selectAll.value;
        });

        calculateAmountTotal();
    };

    const toggleSelection = (invoice) => {
        if (selectAll.value) {
            selectAll.value = false;
        }
        invoice.selected = !invoice.selected;
        selectAll.value = invoices.data.every(inv => inv.selected);
        calculateAmountTotal();
    };
    const addPayments = () => {
        
        base.pos_profile.payments.forEach(element => {
            
                modes.value.push({
                    "mode_of_payment": element.mode_of_payment,
                    "amount": 0.00,
                    "base_amount": 0.00,
                })
            })
            base.paid_amount=0
        base.diff=0

        


    }
const clearPayments = () => {
    modes.value.forEach(mode => {
        mode.amount = 0;
    });
    base.paymentAmount = 0;
    base.paid_amount = 0;
    base.diff = 0;
    invoices.data.forEach(invoice => {
        invoice.selected = false;
    });
    selectAll.value = false;

    invoices.reload(); // Await to ensure reactivity updates fully
};

    const changemode = (index) => {
        modes.value.forEach((element, i) => {
            if (i === index) {

                element.amount = base.paymentAmount
            } else {
                element.amount = 0
            }
        })
        base.paid_amount = base.paymentAmount 
    }
    
    onBeforeMount(() => {
        addPayments()

    });
    const now = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const createpayment = async () => {
        if (currentTab.value === 'credit'){
            const sortedModes = [...modes.value].sort((a, b) => b.amount - a.amount);
            const selectedInvoices = filteredInvoices.value.filter(inv => inv.selected);
            let i = 0;

            while (i < sortedModes.length) {
                const currentMode = sortedModes[i];
                let totalToSpend = currentMode.amount;
                const invoiceDetails = [];
                
                for (let invoice of selectedInvoices) {
                    if (totalToSpend <= 0) break;
                    if (invoice.outstanding_amount <= 0) continue;

                    const allocated = Math.min(totalToSpend, invoice.outstanding_amount);
                    invoice.outstanding_amount -= allocated;
                    totalToSpend -= allocated;
                    
                    invoiceDetails.push({
                        reference_doctype: "Sales Invoice",
                        reference_name: invoice.name,
                        allocated_amount: allocated,
                        outstanding_amount: invoice.outstanding_amount
                    });
                }

                if ((currentMode.amount - totalToSpend) > 0 && invoiceDetails.length > 0) {
                    await save.fetch({
                        action: 'Submit',
                        references: invoiceDetails,
                        mode: currentMode.mode_of_payment,
                        amount: currentMode.amount - totalToSpend
                    });
                }
                
                i++;
            }
            clearPayments();
        }
        else {
            const totalAmount = modes.value.reduce((sum, mode) => sum + (mode.amount || 0), 0);
            
            if (totalAmount > 0) {
                for (const mode of modes.value) {
                    if (mode.amount > 0) {
                        await save.fetch({
                            action: 'Submit',
                            references: [],
                            mode: mode.mode_of_payment,
                            amount: mode.amount || 0
                        });
                    }
            }
            clearPayments();
            } else {
                createToast({
                    title: 'Error',
                    message: 'Please enter a valid amount for the payment method.',
                    icon: 'x-circle',
                    iconClasses: 'bg-surface-red-5 text-ink-white rounded-md p-px',
                    position: 'top-center',
                    timeout: 5,
                });
            }
        }
    }
    

    
    let save = createResource({
        url: 'frappe.desk.form.save.savedocs',
        makeParams(params) {
            return {
                doc: JSON.stringify(
                    {
                        doctype:"Payment Entry",
                        payment_type: "Receive",
                        posting_date:now(),
                        party_type:'Customer',
                        mode_of_payment:params.mode,
                        party: base.customer.name,
                        paid_from_account_currency:base.pos_profile.currency,
                        paid_from:'Debtors - FITPL',
                        paid_to:"MGR Cash - FITPL",
                        paid_to_account_currency:base.pos_profile.currency,
                        paid_amount: params.amount ,
                        base_paid_amount: params.amount,
                        received_amount: params.amount,
                        base_received_amount: params.amount,
                        references: params.references.length > 0 ?  params.references : [],
                        reference_no:base.Ant_Opening_Shift.name
                    },
                ),
                action: params.action
            }
        },
        onSuccess(data) {
            errorHandled = false;
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
    watch(
        () => base.customer,
        (newValue, oldValue) => {
            if (oldValue != null && newValue.name !== oldValue.name) {
                customerName.value = newValue.name;
                invoices.filters.customer = newValue.name;
                invoices.fetch();
            }
        },
        { immediate: true }
        ,
    );
    watch(
        () => modes.value.map(mode => mode.amount),
        (newAmounts) => {
            const total = newAmounts.reduce((sum, val) => sum + Number(val || 0), 0);
            base.diff =   Number(base.paymentAmount || 0) - total;

        },
        { immediate: true }
    );
   
</script>