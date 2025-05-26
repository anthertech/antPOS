<template>
    <div class="w-1/2 shadow-2xl pt-2 px-2 rounded ">
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
                    v-model="base.invoice.paid_amount" 
                />
                <FormControl
                    :type="'number'"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="Placeholder"
                    :disabled="true"
                    label="To Be Paid"
                    v-model="base.invoice.rounded_total"
                />
                <FormControl
                    v-if="base.invoice.paid_amount > base.invoice.rounded_total" 
                    :type="'number'"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="Placeholder"
                    :disabled="true"
                    label="Paid Change"
                    :value="base.invoice.paid_amount - base.invoice.rounded_total"
                />
            </div>
            <div class="grid grid-cols-2 gap-4 p-2 items-center" v-for="(mode, index) in base.pos_profile.payments" :key="index">
                <FormControl
                    v-if="base.invoice?.payments?.length"
                    type="number"
                    size="sm"
                    variant="subtle"
                    placeholder="0"
                    :disabled="false"
                    :label="mode.mode_of_payment"
                    v-model="base.invoice.payments[index].amount"
                    @change="changePaymentAmount($event)"
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
            <div class="grid grid-cols-2 gap-4 p-2">
                <FormControl
                    :type="'number'"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="0"
                    :disabled="true"
                    label="Net Total"
                    v-model="base.invoice.net_total"
                />
                <FormControl
                    :type="'number'"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="0"
                    :disabled="true"
                    label="Tax and Charges"
                    v-model="base.invoice.total_taxes_and_charges"
                />
                <FormControl
                    :type="'number'"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="0"
                    :disabled="true"
                    label="Total Amount"
                    v-model="base.invoice.total"
                />
                <FormControl
                    :type="'number'"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="0"
                    :disabled="true"
                    label="Discount Amount"
                    v-model="base.invoice.discount_amount"
                />
                <FormControl
                    :type="'number'"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="0"
                    :disabled="true"
                    label="Grand Total"
                    v-model="base.invoice.grand_total"
                />
                <FormControl
                    :type="'number'"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="0"
                    :disabled="true"
                    label="Rounded Total"
                    v-model="base.invoice.rounded_total"
                />
            </div>
            <div v-for="(credit, index) in base.invoice.advances" :key="index">
                <div class="grid grid-cols-3 gap-4 p-2">
                    <FormControl
                        :type="'text'"
                        :ref_for="true"
                        size="sm"
                        variant="subtle"
                        placeholder="0"
                        :disabled="true"
                        label="Credit Origin"
                        v-model="credit.reference_name"
                    />
                    <FormControl
                        :type="'number'"
                        :ref_for="true"
                        size="sm"
                        variant="subtle"
                        placeholder="0"
                        :disabled="true"
                        label="Total Credit"
                        v-model="credit.advance_amount"
                    />
                    <FormControl
                        :type="'number'"
                        :ref_for="true"
                        size="sm"
                        variant="subtle"
                        placeholder="0"
                        :disabled="false"
                        label="Credit To Redeem"
                        v-model="credit.allocated_amount"
                        @change="changePaymentAmount($event)"
                    />
                </div>
            </div>
            <div>
                <DatePicker
                    v-if="base.pos_profile.custom_set_sales_order"
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
                    @click="remove_invoice"
                    theme="red"
                >
                    Cancel
                </Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Button, FormControl, createResource, DatePicker, dayjsLocal, createListResource  } from 'frappe-ui'
import { ref, inject, onMounted , watch, computed } from 'vue'
import { createToast } from '../utils';
import { showToast } from '../utils'

let base = inject('base')
let errorHandled = false;
let doc = ref({})

const addPayments = () => {
    
    base.invoice.paid_amount = base.invoice.base_rounded_total
    base.pos_profile.payments.forEach(element => {
        if (!base.invoice.payments.some(payment => payment.mode_of_payment === element.mode_of_payment)) {
            base.invoice.payments.push({
                "mode_of_payment": element.mode_of_payment,
                "amount": Number(element.default) ? Number(base.invoice.base_rounded_total) : 0.00,
                "base_amount": Number(element.default) ? Number(base.invoice.base_rounded_total) : 0.00,
            })
        }
    })


}

const changemode = (index) => {
    base.invoice.payments.forEach((element, i) => {
        if (i === index) {
            element.amount = base.invoice.base_rounded_total
        } else {
            element.amount = 0
        }
    })
    base.invoice.paid_amount = base.invoice.base_rounded_total
}


const deliveryDate = computed({
  get() {
    if (!base.invoice.delivery_date) {
      const today = dayjsLocal().format('YYYY-MM-DD')
      base.invoice.delivery_date = today
    }
    return base.invoice.delivery_date
  },
  set(value) {
    base.invoice.delivery_date = value
  }
})
onMounted(() => {
    addPayments()
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

        errorHandled = false;
        doc.value.doc = data.docs[0];
    },
    onError(error) {
        if (!errorHandled) {
            createToast({
                title: 'error',
                message: Array.isArray(error?.messages) ? error.messages[0] : error?.messages || 'An error occurred',
                icon: 'x-circle',
                iconClasses: 'bg-surface-red-5 text-ink-white rounded-md p-px',
                position: 'top-center',
                timeout: 5,
            });
            errorHandled = true;
        }
    }
});

const remove_invoice = () => {
    base.invoice = {
        payments: [],
        advances: [],
        items: [],
        paid_amount: 0,
        rounded_total: 0,
        net_total: 0,
        total_taxes_and_charges: 0,
        total: 0,
        discount_amount: 0,
        grand_total: 0,
        base_rounded_total: 0,
        delivery_date: '',
    };
    base.items = [];
    base.customer = {};
};

const changePaymentAmount = () => {
    base.invoice.paid_amount = 0;

    base.invoice.payments.forEach((element) => {
        element.amount = Number(element.amount);
        base.invoice.paid_amount += element.amount;
    });

    if (Array.isArray(base.invoice.advances)) {
        base.invoice.advances.forEach((element) => {
            if (element.allocated_amount > 0) {
                element.allocated_amount = Number(element.allocated_amount);
                base.invoice.paid_amount += element.allocated_amount;
            }
        });
    }
};

const saveAndSubmit = async (doc) => {
    await createSaveResource.fetch({ action: 'Save', doc:doc.value.doc });
    await createSaveResource.fetch({ action: 'Submit', doc:doc.value.doc });
}

const submitInvoice = async (action = null) => {
    let invoice = { ...base.invoice };

    if (await validatePaymentBeforeSave(base)) {
        if (base?.pos_profile?.custom_set_sales_order) {
            

            const salesOrder = {
                ...base.invoice,
                doctype: 'Sales Order',
                name: '',
                naming_series: ''
            };

            doc.value = { doc: salesOrder };
            await saveAndSubmit(doc);
    
            
            const orderName = doc.value.doc.name;

            base.invoice.items.forEach((item, index) => {
                item.so_detail = doc.value.doc.items?.[index]?.name || "";
                item.sales_order = orderName;
            });
        }

        doc.value = {
              doc: base.invoice
            }
        
        saveAndSubmit(doc)

        remove_invoice();
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
    if (base.pos_profile.skip_printview){

    }else{
        window.open(
            `${baseurl.data}/printview?doctype=Sales+Invoice&name=${
                name
            }&format=${encodeURIComponent(base.pos_profile.print_format)}&trigger_print=1&no_letterhead=${base.pos_profile.letter_head ? 1 :0 }
            &letterhead=${base.pos_profile.letter_head}`,
            "_blank"
        );
    }

}
const baseurl = createResource({url: 'ant_pos.ant_pos.utils.get_domain_url',});
let advance = createResource({
    url: 'run_doc_method',
    auto: true,
    makeParams(params) {        
        return {
            docs: {...base.invoice,is_pos: false,custom_ant_opening:base.Ant_Opening_Shift.name,},
            method: 'set_advances'
        }
    },
    onSuccess(data) {
        base.invoice = {...data.docs[0],is_pos: true}
        addPayments()
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

let makepayment = createResource({
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

const validatePaymentBeforeSave = async () => {

    let advance = 0
    let payment = 0
    
    base.invoice.advances.forEach((element) => {
        advance += Number(element.allocated_amount)
    })

    base.invoice.payments.forEach((element) => {
        payment += Number(element.amount)
    })

    if (advance > 0) {
        if (base.invoice.paid_amount > base.invoice.rounded_total) {
            showToast('warning', 'Paid amount is greater than rounded total', 'alert-circle', '#ffcc00','#ffffff');
            return false;
        }
        base.invoice.payments = []
        base.invoice.is_pos = false
    }

    return true;
}


watch(
    () => {
        const advances = base?.invoice?.advances;
        return Array.isArray(advances) ? advances.map(advance => advance.allocated_amount) : [];
    },
    (newValues, oldValues) => {

        changePaymentAmount();
    },
    { deep: true }
);

// const salesResource = createListResource({
//   doctype: 'Sales Person',
//   fields: ['name'],
//   filters: {
//     enabled: false,
//   },
//   pageLength: Number.MAX_VALUE * 2,
//   auto: true,
//   onSuccess(data) {
//     errorHandled = false;
//   },
//   onError(error) {
//     if (!errorHandled) {
//         createToast({
//             title: 'error',
//             message: Array.isArray(error?.messages) ? error.messages[0] : error?.messages || error || 'An error occurred',
//             icon: 'x-circle',
//             iconClasses: 'bg-surface-red-5 text-ink-white rounded-md p-px',
//             position: 'top-center',
//             timeout: 5,
//         });
//         errorHandled = true;
//     }
//     },
// });

// const patnerResource = createListResource({
//   doctype: 'Sales Partner',
//   fields: ['name'],
//   filters: {
//     enabled: false,
//   },
//   pageLength: Number.MAX_VALUE * 2,
//   auto: true,
//   onSuccess(data) {
//     errorHandled = false;
//   },
//   onError(error) {
//     if (!errorHandled) {
//         createToast({
//             title: 'error',
//             message: Array.isArray(error?.messages) ? error.messages[0] : error?.messages || error || 'An error occurred',
//             icon: 'x-circle',
//             iconClasses: 'bg-surface-red-5 text-ink-white rounded-md p-px',
//             position: 'top-center',
//             timeout: 5,
//         });
//         errorHandled = true;
//     }
//     },
// });
// const computedSalesOptions = computed(() => {
//   return salesResource?.data
//     ? salesResource.data.map((option) => ({
//         label: option.name,
//         value: option.name
//       }))
//     : [];
// });

</script>