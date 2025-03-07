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
            {{ base.advance }}
            <div v-for="(credit, index) in base.advance" :key="index">
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
                        @click="submitInvoice"
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
                    @click="cancelInvoice"
                >
                    Cancel
                </Button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { Button, FormControl, createResource , createListResource } from 'frappe-ui'
    import { inject, onMounted } from 'vue'

    let base = inject('base')

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
                element.amount =  base.invoice.base_rounded_total
            } else {
                element.amount = 0
            }
        })
        base.invoice.paid_amount = base.invoice.base_rounded_total
    }

    onMounted(() => {
        addPayments()
        customerCredit()
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
            base.invoice = data.docs[0]
        }

    });

    const changePaymentAmount = () => {
        base.invoice.paid_amount = 0
        
        base.invoice.payments.forEach((element) => {
            base.invoice.paid_amount += Number(element.amount)
        })
        base.advance.forEach((element) => {
            if (element.allocated_amount > 0) {
                base.invoice.paid_amount += Number(element.allocated_amount)
            }
        })
    }; 


    const submitInvoice = async () => {

        await save.fetch({ action: "Save" })
        await save.fetch({ action: "Submit" })
        base.items = [];
        base.status = '';
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
        base.advance = [];
        base.customer   = {}
    };

    let customerAdvance = createListResource({
        doctype: 'Payment Entry',
        fields: ["name", "unallocated_amount"],
        filters: {
            unallocated_amount: [">", 0],
            party_type: "Customer",
            party: base.customer,
            company: base.company,
            docstatus: 1,
        },
        onSuccess(data) {
            data.forEach(element => {
                element = {
                    "type": "Advance",
                    "reference_name": element.name,
                    "reference_type": "Payment Entry",
                    "advance_amount": element.unallocated_amount,
                    "allocated_amount": 0,
                    "doctype" :"Sales Invoice Advance",
                    "parentfield" : "advances",
                    "parenttype" : "Sales Invoice",
                    "exchange_gain_loss":0,
                    "name": "new-sales-invoice-advance-rggbcnnldi",
                    "parent": "new-sales-invoice-spvhmzepim",
                    "ref_exchange_rate": 1,
                    "__islocal":1


                }
                base.advance.push(element)
            });
        }
    })

    const customerCredit = () => {
        base.advance = []
        customerAdvance.fetch()
    }

</script>