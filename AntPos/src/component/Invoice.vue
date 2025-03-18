<template>
    <div class="w-1/2 shadow-2xl pt-2 px-2 rounded">
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
                    v-if="base.invoice?.payments && base.invoice.payments[index]"
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
                    :disabled="false"
                    label="Net Total"
                    v-model="base.invoice.net_total"
                />
                <FormControl
                    :type="'number'"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="0"
                    :disabled="false"
                    label="Tax and Charges"
                    v-model="base.invoice.total_taxes_and_charges"
                />
                <FormControl
                    :type="'number'"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="0"
                    :disabled="false"
                    label="Total Amount"
                    v-model="base.invoice.total"
                />
                <FormControl
                    :type="'number'"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="0"
                    :disabled="false"
                    label="Discount Amount"
                    v-model="base.invoice.discount_amount"
                />
                <FormControl
                    :type="'number'"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="0"
                    :disabled="false"
                    label="Grand Total"
                    v-model="base.invoice.grand_total"
                />
                <FormControl
                    :type="'number'"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="0"
                    :disabled="false"
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
        </div>
        <div class="h-[15%] w-full mt-2">
            <div class="h-1/2">
                <div class="flex gap-8 h-full">
                    <Button
                        class="w-1/2 h-full"
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
                        class="w-1/2 h-full"
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
                    class="w-full"
                    :variant="'solid'"
                    theme="gray"
                    size="lg"
                    label="Cancel"
                    :loading="false"
                    :disabled="false"
                    @click="remove_invoice"
                >
                    Cancel
                </Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Button, FormControl, createResource } from 'frappe-ui'
import { inject, onMounted , watch } from 'vue'
import { createToast } from '../utils';
import { showToast } from '../utils'

let base = inject('base')
let errorHandled = false;


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

onMounted(() => {
    addPayments()
})

let save = createResource({
    url: 'frappe.desk.form.save.savedocs',
    makeParams(params) {
        return {
            doc: JSON.stringify(base.invoice),
            action: params.action
        }
    },
    onSuccess(data) {
        errorHandled = false;
        base.invoice=data.docs[0]
    },
    onError(error) {
            if (!errorHandled) {
                createToast({
                    title: 'Error',
                    text: Array.isArray(error?.messages) ? error.messages[0] : error?.messages  || 'An error occurred',
                    icon: 'x',
                    iconClasses: 'bg-surface-red-5 text-ink-white rounded-md p-px',
                    position: 'top-center',
                    timeout: 5,
                });
                errorHandled = true;
            }
    },
});

const remove_invoice = () => {
    base.invoice = {
        payments: [],
        paid_amount: 0,
        rounded_total: 0,
        net_total: 0,
        total_taxes_and_charges: 0,
        total: 0,
        discount_amount: 0,
        grand_total: 0,
        base_rounded_total: 0
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

const submitInvoice = async (action=null) => {
    let invoice = {...base.invoice}
    if (await validatePaymentBeforeSave(base)){
        await save.fetch({ action: 'Save' })
        await save.fetch({ action: 'Submit' })
        remove_invoice()
        createPayments(invoice)
        if (action !=null){
            createPrint(invoice.name)
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
const baseurl = createResource({
        url: 'ant_pos.ant_pos.utils.get_domain_url',

        onSuccess(data) {
            console.log(data,"ppppppppp");
            
            }

    });
let advance = createResource({
    url: 'run_doc_method',
    auto: true,
    makeParams(params) {        
        return {
            docs: {...base.invoice,is_pos: false},
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
                    title: 'Error',
                    text: Array.isArray(error?.messages) ? error.messages[0] : error?.messages  || 'An error occurred',
                    icon: 'x',
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
                    title: 'Error',
                    text: Array.isArray(error?.messages) ? error.messages[0] : error?.messages  || 'An error occurred',
                    icon: 'x',
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
            showToast('Warning', 'Paid amount is greater than rounded total', 'alert-circle', '#ffcc00','#ffffff');
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

</script>