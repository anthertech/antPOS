<template>
    <div class="md:w-5/12 w-full shadow-2xl pt-2 px-2 rounded ">
        <div class="h-[85%] w-full">
            <div class="grid grid-cols-2 gap-4 p-2">
                <FormControl
                    :type="'number'"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="Placeholder"
                    :disabled="true"
                    label="Amount Paid"
                    :value="Number(invoiceStore.invoice.paid_amount).toFixed(2)"
                    v-model="invoiceStore.invoice.paid_amount" 
                />
                <FormControl
                    :type="'number'"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="Placeholder"
                    :disabled="true"
                    label="To Be Paid"
                    :value="Number(invoiceStore.invoice.rounded_total).toFixed(2)"

                    v-model="invoiceStore.invoice.rounded_total"
                />
                <FormControl
                    v-if="invoiceStore.invoice.paid_amount > invoiceStore.invoice.rounded_total" 
                    :type="'number'"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="Placeholder"
                    :disabled="true"
                    label="Paid Change"
                    :value="Number(invoiceStore.invoice.paid_amount - invoiceStore.invoice.rounded_total).toFixed(2)"
                />
            </div>
            <div class="grid grid-cols-2 gap-4 p-2 items-center" v-for="(mode, index) in store.posProfileData?.payments" :key="index">

                <FormControl
                    v-if="invoiceStore.invoice?.payments?.[index] && invoiceStore.invoice?.payments?.[index].amount !== undefined"
                    type="number"
                    size="sm"
                    variant="subtle"
                    placeholder="0.00"
                    :disabled="false"
                    :label="mode.mode_of_payment"
                    :value="Number(invoiceStore.invoice.payments[index].amount).toFixed(2)"
                    v-model="invoiceStore.invoice.payments[index].amount"
                    @change="changePaymentAmount($event)"
                />
                <Button
                    v-if="invoiceStore.invoice?.payments?.[index] && invoiceStore.invoice?.payments?.[index].amount !== undefined"
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
            <div class="grid grid-cols-2 gap-4 p-2">
                <FormControl
                    :type="'number'"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="0.00"
                    :disabled="true"
                    label="Net Total"
                    :value="Number(invoiceStore.invoice.net_total).toFixed(2)"
                    v-model="invoiceStore.invoice.net_total"
                />
                <FormControl
                    :type="'number'"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="0.00"
                    :disabled="true"
                    label="Tax and Charges"
                    :value="Number(invoiceStore.invoice.total_taxes_and_charges).toFixed(2)"
                    v-model="invoiceStore.invoice.total_taxes_and_charges"
                />
                <FormControl
                    :type="'number'"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="0.00"
                    :disabled="true"
                    label="Total Amount"
                    :value="Number(invoiceStore.invoice.total).toFixed(2)"
                    v-model="invoiceStore.invoice.total"
                />
                <FormControl
                    :type="'number'"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="0.00"
                    :disabled="true"
                    label="Discount Amount"
                    :value="Number(invoiceStore.invoice.discount_amount).toFixed(2)"
                    v-model="invoiceStore.invoice.discount_amount"
                />
                <FormControl
                    :type="'number'"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="0.00"
                    :disabled="true"
                    label="Grand Total"
                    :value="Number(invoiceStore.invoice.grand_total).toFixed(2)"
                    v-model="invoiceStore.invoice.grand_total"
                />
                <FormControl
                    :type="'number'"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="0.00"
                    :disabled="true"
                    label="Rounded Total"
                    :value="Number(invoiceStore.invoice.rounded_total).toFixed(2)"
                    v-model="invoiceStore.invoice.rounded_total"
                />
            </div>
            <div v-for="(credit, index) in invoiceStore.invoice.advances" :key="index">
                <div class="grid grid-cols-3 gap-4 p-2">
                    <FormControl
                        :type="'text'"
                        :ref_for="true"
                        size="sm"
                        variant="subtle"
                        placeholder="0.00"
                        :disabled="true"
                        label="Credit Origin"
                        v-model="credit.reference_name"
                    />
                    <FormControl
                        :type="'number'"
                        :ref_for="true"
                        size="sm"
                        variant="subtle"
                        placeholder="0.00"
                        :disabled="true"
                        label="Total Credit"
                        :value="Number(credit.advance_amount).toFixed(2)"
                        v-model="credit.advance_amount"
                    />
                    <FormControl
                        :type="'number'"
                        :ref_for="true"
                        size="sm"
                        variant="subtle"
                        placeholder="0.00"
                        :disabled="false"
                        label="Credit To Redeem"
                        :value="Number(credit.allocated_amount).toFixed(2)"
                        v-model="credit.allocated_amount"
                        @change="changePaymentAmount($event)"
                    />
                </div>
            </div>
            <div>
                <DatePicker
                    v-if="store.posProfileData.custom_set_sales_order"
                    size="md"
                    v-model="deliveryDate"
                    variant="subtle"
                    placeholder="Delivery Date"
                    :disabled="false"
                />     
            </div>
        </div>
        <div class="h-[14%] w-full mt-2 flex flex-col gap-2 ">
            <div class="h-1/2 ">
                <div class="flex gap-8 h-full mb-3 justify-center items-center">
                    <Button
                        class="w-1/2 h-[90%]"
                        :variant="'solid'"
                        theme="gray"
                        size="lg"
                        label="Submit"
                        :loading="false"
                        :disabled="false"
                        @click="submitInvoice()"
                    >
                        Submit
                    </Button>
                    <Button
                        class="w-1/2  h-[90%]"
                        :variant="'solid'"
                        theme="gray"
                        size="lg"
                        label="Submit & Print"
                        :loading="false"
                        :disabled="false"
                        @click="submitInvoice('print')"
                    >
                        Submit & Print
                    </Button>
                </div>
            </div>
            <div class="h-1/2">
                <Button
                    class="w-full h-[90%]"
                    :variant="'ghost'"
                    size="lg"
                    label="Cancel"
                    :loading="false"
                    :disabled="false"
                    @click="emitter.emit('remove_invoice', true)"
                    theme="red"
                >
                    Cancel
                </Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Button, FormControl, createResource, DatePicker, dayjsLocal  } from 'frappe-ui'
import { ref, onMounted , watch, computed } from 'vue'
import { createToast } from '@/utils';
import { showToast } from '@/utils'
import emitter from '@/utils/emitter';
import { usePosProfileStore } from '@/stores/posProfile';
import { useInvoiceStore } from '@/stores/pos';


let doc = ref({})
const store = usePosProfileStore();
const invoiceStore = useInvoiceStore()
const baseurl = createResource({url: 'ant_pos.ant_pos.utils.get_domain_url',});
const addPayments = () => {
    invoiceStore.invoice.paid_amount = invoiceStore.invoice.base_rounded_total
    if (!invoiceStore.invoice.payments) invoiceStore.invoice.payments = []
    store.posProfileData.payments.forEach(element => {
        if (!invoiceStore.invoice.payments.some(payment => payment.mode_of_payment === element.mode_of_payment) && (invoiceStore.invoice.is_return && element.allow_in_returns || !invoiceStore.invoice.is_return )) {
            invoiceStore.invoice.payments.push({
                "mode_of_payment": element.mode_of_payment,
                "amount": Number(element.default) ? Number(invoiceStore.invoice.base_rounded_total) : 0.00,
                "base_amount": Number(element.default) ? Number(invoiceStore.invoice.base_rounded_total) : 0.00,
            })
        }
    })
}

const changemode = (index) => {
    invoiceStore.invoice.payments.forEach((element, i) => {
        if (i === index) {
            element.amount = invoiceStore.invoice.base_rounded_total
        } else {
            element.amount = 0
        }
    })
    invoiceStore.invoice.paid_amount = invoiceStore.invoice.base_rounded_total
}

const deliveryDate = computed({
  get() {
    if (!invoiceStore.invoice.delivery_date) {
      const today = dayjsLocal().format('YYYY-MM-DD')
      invoiceStore.invoice.delivery_date = today
    }
    return invoiceStore.invoice.delivery_date
  },
  set(value) {
    invoiceStore.invoice.delivery_date = value
  }
})

const createSaveResource = createResource({
    url: 'frappe.desk.form.save.savedocs',
    makeParams(params) {
        return {
            doc: JSON.stringify(params.doc),
            action: params.action
        };
    },
    onSuccess(data) {
        doc.value.doc = data.docs[0];
    },
    onError(error) {
        createToast({
            title: 'error',
            message: Array.isArray(error?.messages) ? error.messages[0] : error?.messages || 'An error occurred',
            icon: 'x-circle',
            iconClasses: 'bg-surface-red-5 text-ink-white rounded-md p-px',
            position: 'top-center',
            timeout: 5,
        });
    }
});

const changePaymentAmount = () => {
    invoiceStore.invoice.paid_amount = 0;
    invoiceStore.invoice.payments.forEach((element) => {
        element.amount = Number(element.amount);
        invoiceStore.invoice.paid_amount += element.amount;
    });

    if (Array.isArray(invoiceStore.invoice.advances)) {
        invoiceStore.invoice.advances.forEach((element) => {
            if (element.allocated_amount > 0) {
                element.allocated_amount = Number(element.allocated_amount);
                invoiceStore.invoice.paid_amount += element.allocated_amount;
            }
        });
    }
};

const saveAndSubmit = async (doc) => {
    await createSaveResource.fetch({ action: 'Save', doc:doc.value.doc });
    await createSaveResource.fetch({ action: 'Submit', doc:doc.value.doc });
}

const submitInvoice = async (action = null) => {
    if(!store.posProfileData.custom_allow_credit){
        if (invoiceStore.invoice.paid_amount< invoiceStore.invoice.rounded_total) return showToast('warning', 'Credit Not Allowed', 'alert-circle', '#ffcc00','#ffffff');
    }
    if(!store.posProfileData.custom_allow_partial_payments){
        if ((invoiceStore.invoice.paid_amount - invoiceStore.invoice.rounded_total) > 0 ) return showToast('warning', 'Partial payment  Not Allowed', 'alert-circle', '#ffcc00','#ffffff');
    }
    let invoice = { ...invoiceStore.invoice };
    if (await validatePaymentBeforeSave()) {
        if (store.posProfileData.custom_set_sales_order) {
            const salesOrder = {
                ...invoiceStore.invoice,
                doctype: 'Sales Order',
                name: '',
                naming_series: ''
            };

            doc.value = { doc: salesOrder };
            await saveAndSubmit(doc);
            const orderName = doc.value.doc.name;
            invoiceStore.invoice.items.forEach((item, index) => {
                item.so_detail = doc.value.doc.items?.[index]?.name || "";
                item.sales_order = orderName;
            });
        }
        doc.value = {
            doc: invoiceStore.invoice
        }
        await saveAndSubmit(doc);
        emitter.emit('remove_invoice',true);
        createPayments(invoice);
        showToast('success','Invoice submitted successfully', 'check-circle', 'green');
        if (action !== null) {
            createPrint(invoice.name);
        }
    }
};

const createPayments = async (invoice) =>{
    if (invoice.advances.some((element) => element.allocated_amount > 0)) { 
        for (const element of invoice.payments) {
            if (element.amount > 0) {
                await makepayment.fetch({ payments: element, invoice: invoice, method: 'Submit', change: true });
            }
        }
    }
};

const createPrint = async (name) =>{
    await baseurl.fetch()
    if (!store.posProfileData?.skip_printview){
        window.open(
            `${baseurl.data}/printview?doctype=Sales+Invoice&name=${
                name
            }&format=${encodeURIComponent(store.posProfileData.print_format)}&trigger_print=1&no_letterhead=${store.posProfileData.letter_head ? 1 :0 }
            &letterhead=${store.posProfileData.letter_head}`,
            "_blank"
        );
    }
}

createResource({
    url: 'run_doc_method',
    auto: true,
    makeParams(params) {        
        return {
            docs: { ...invoiceStore.invoice, is_pos: false, custom_ant_opening:store.openingShift.name },
            method: 'set_advances'
        }
    },
    onSuccess(data) {
        for (const key in data.docs[0]) {
           
            const existingValue = invoiceStore.invoice[key];
            const newValue = data.docs[0][key];

            // Check for changes or new keys
            if (key !== 'is_pos' && key !== 'docstatus' && JSON.stringify(existingValue) !== JSON.stringify(newValue)) {
                invoiceStore.invoice[key] = newValue;
            }
        }
        addPayments()
    },
    onError(error) {
        createToast({
            title: 'error',
            message: Array.isArray(error?.messages) ? error.messages[0] : error?.messages  || 'An error occurred',
            icon: 'x-circle',
            iconClasses: 'bg-surface-red-5 text-ink-white rounded-md p-px',
            position: 'top-center',
            timeout: 5,
        });
    },
});

const makepayment = createResource({
    url: 'frappe.desk.form.save.savedocs',
    makeParams(params) {
        return {
            doc: JSON.stringify({
                ...params.payments,
                doctype: 'Payment Entry',
                payment_type: 'Receive',
                party_type: 'Customer',
                party: params.invoice.customer,
                paid_amount: params.payments.amount,
                received_amount: params.payments.amount,
                name: '',
                references: [
                    {
                        reference_doctype: 'Sales Invoice',
                        reference_name: params.invoice.name,
                        due_date: params.invoice.due_date,
                        allocated_amount: params.payments.amount
                    }
                ],
                target_exchange_rate: 1,
                company: params.invoice.company,
                cost_center: params.invoice.cost_center,
                branch: params.invoice.branch,
            }),
            action: params.method
        }
    },
    onError(error) {
        createToast({
            title: 'error',
            message: Array.isArray(error?.messages) ? error.messages[0] : error?.messages  || 'An error occurred',
            icon: 'x-circle',
            iconClasses: 'bg-surface-red-5 text-ink-white rounded-md p-px',
            position: 'top-center',
            timeout: 5,
        });
    },
});

const validatePaymentBeforeSave = async () => {
    let advance = 0
    let payment = 0
    
    invoiceStore.invoice.advances.forEach((element) => {
        element.allocated_amount = Number(element.allocated_amount)
        advance += element.allocated_amount
    })

    invoiceStore.invoice.payments.forEach((element) => {
        payment += Number(element.amount)
    })

    if (advance > 0) {
        if (invoiceStore.invoice.paid_amount > invoiceStore.invoice.rounded_total) {
            showToast('warning', 'Paid amount is greater than rounded total', 'alert-circle', '#ffcc00','#ffffff');
            return false;
        }
        invoiceStore.invoice.payments = []
        invoiceStore.invoice.is_pos = false
    }

    return true;
}

watch(
    () => {
        const advances = invoiceStore.invoice?.advances;
        return Array.isArray(advances) ? advances.map(advance => advance.allocated_amount) : [];
    },
    (newValues, oldValues) => {
        changePaymentAmount();
    },
    { deep: true }
);

onMounted(() => {
    addPayments()
})
</script>