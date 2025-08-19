<template>
    <div class="md:w-1/2 w-full h-full flex flex-col gap-2">
        <div class="h-[80%] w-full rounded-lg shadow-2xl px-2 pt-2">
            <div class="flex gap-4 h-[5%]">
                <Customer />
                <Button
                    class="w-1/12"
                    @click="loadComponent('CustomerForm');"
                    :variant="'solid'"
                    :ref_for="true"
                    theme="gray"
                    size="sm"
                    label="Button"
                    :loading="false"
                    :loadingText="null"
                    :disabled="false"
                    :link="null"
                >
                    <FeatherIcon
                    class="w-4 cursor-pointer"
                    name="plus"
                    @click="loadComponent('CustomerForm');"
                    />
                </Button>
            </div>
            <div class="py-2  h-[93%] overflow-y-scroll scrollbar-hide flex flex-col items-center w-full ">
                <div class="mb-2 w-full flex flex-col items-center">
                    <div class="flex bg-gray-200 w-full py-2 px-3 justify-between rounded text-center ">
                        <div class="w-[18.4%]">
                            Item Code
                        </div>
                        <div  class="w-[18.4%]">
                            QTY
                        </div>
                        <div  class="w-[18.4%]">
                            UOM
                        </div>
                        <div  class="w-[18.4%]">
                            Rate
                        </div>
                        <div  class="w-[18.4%]">
                            Amount
                        </div>
                        <div class="w-[8%]">
                            Remove
                        </div>
                    </div>
                </div>
                <div v-for="(item, key) in base.items" :key="item.custom_id" class="flex flex-col justify-between mb-2 w-full ">
                    
                    <Item :items="item" :index="key"  />                   
                </div>
            </div>
        </div>

        <div class="h-[20%] flex shadow-2xl rounded">
            <div class=" w-[60%] grid grid-cols-2 gap-4 p-4 h-full">
                <FormControl
                    :type="'number'"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="0.00"
                    :disabled="true"
                    label="Total Qty"
                    v-model="base.invoice.total_qty"
                />
                <FormControl
                    v-if="base.pos_profile.custom_use_percentage_discount"
                    :type="'number'"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="0.00"
                    :disabled="!base.pos_profile.allow_discount_change"
                    label="Additional Discount (%)"
                    v-model="base.additional_discount_percentage"
                />
                <FormControl
                    v-else
                    :type="'number'"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="0.00"
                    :disabled="!base.pos_profile.allow_discount_change"
                    :label="`Additional Discount (${base.pos_profile.currency})`"
                    v-model="base.discount_amount"
                    :value="Number(base.discount_amount).toFixed(2)"
                    />
                <FormControl
                    :type="'number'"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="0.00"
                    :disabled="true"
                    label="Net Total"
                    :class="''"
                    :value="Number(base.invoice.net_total).toFixed(2)"
                    v-model="base.invoice.net_total"
                />
                <FormControl
                    :type="'number'"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="0.00"
                    :disabled="true"
                    label="Total"
                    :class="''"
                    :value="Number(base.invoice.grand_total).toFixed(2)"
                    v-model="base.invoice.grand_total"
                />

            </div>
            <div class=" w-[40%] h-full grid grid-cols-2 gap-2 p-4">
                <Button
                    :ref_for="true"
                    label="Button"
                    :loading="false"
                    :loadingText="null"
                    :disabled="false"
                    :link="null"
                    theme="blue"
                    @click="loadComponent('Held')"
                >
                    HELD
                </Button>
                <Button
                    :ref_for="true"
                    label="Button"
                    :loading="false"
                    :loadingText="null"
                    :disabled="false"
                    :link="null"
                    theme="red"
                    @click="loadComponent('Return')"            
                >
                    RETURN
                </Button>
                <Button
                    :ref_for="true"
                    label="Button"
                    :loading="false"
                    :loadingText="null"
                    :disabled="false"
                    :link="null"
                    :variant="'solid'"
                    theme="gray"
                    @click="sales_invoice.fetch({ action:'Save', status:'save_new' })"
                >
                    SAVE/NEW
                </Button>
                <Button
                    :ref_for="true"
                    label="Button"
                    :loading="false"
                    :loadingText="null"
                    :disabled="false"
                    :link="null"
                    theme="green"
                    @click="sales_invoice.fetch({ action:'Save', status:'pay' })"
                >
                    PAY
                </Button>
                <Button
                    :ref_for="true"
                    label="Button"
                    :loading="false"
                    :loadingText="null"
                    :disabled="false"
                    :link="null"
                    :variant="'solid'"
                    theme="gray"
                    @click="sales_invoice.fetch({ action:'Save', status:'print' })"
                >
                    SAVE & PRINT
                </Button>
            </div>
        </div>
    </div>
</template>

<script setup>

import Customer from './Customer.vue';
import { Button, FeatherIcon , FormControl , createResource,} from 'frappe-ui';
    import { inject , watch,ref, onMounted } from 'vue';
    import { createToast } from '../utils';
    import Item from './Item.vue';
    
    const { loadComponent } = inject('dynamicComponent');
    const baseurl = createResource({url: 'ant_pos.ant_pos.utils.get_domain_url'});
    let base = inject('base');
    let status = '';
    const emitter = inject('emitter');
    let errorHandled = false;
    let sales_invoice = createResource({
        url: 'frappe.desk.form.save.savedocs',
        makeParams(params) {
            base.items.forEach((item) => {                
                if (item.has_serial_no && item.selected_serial_no.length !== item.qty) {
                    createToast({
                        title: 'error',
                        message: 'Serial number is required',
                        iconClasses: 'bg-surface-red-5 text-ink-white rounded-md p-px',
                        position: 'top-center',
                        timeout: 5,
                    });
                    errorHandled = true;
                }

            });
            status = params.status
            return {
                doc: JSON.stringify({
                    ...base?.invoice,
                    doctype: 'Sales Invoice',
                    is_pos: base.invoice.is_return ? base.invoice.is_pos : 1,
                    pos_profile: base.pos_profile.name,
                    company: base.pos_profile.company,
                    conversion_rate: 1,
                    selling_price_list: base.pos_profile.selling_price_list,
                    items: base.items,
                    customer: base.customer.name,
                    update_stock: 1,
                    additional_discount_percentage: Number(base.additional_discount_percentage) || 0,
                    discount_amount: Number(base.discount_amount) || 0,
                    base_total: base.invoice.base_total && base.invoice.base_total,
                    custom_ant_opening: base.Ant_Opening_Shift.name,
                    apply_discount_on: base.pos_profile.apply_discount_on,
                    payments:getPayments()
                    
                    
                }),
                action:params.action,
            };
        },
        async onSuccess (data) {
            errorHandled = false;      
            if ( status == 'pay'){
                base.invoice = data.docs[0]
                return

            }else if (status == 'print'){
                await baseurl.fetch()
                window.open(
                    `${baseurl.data}/printview?doctype=Sales+Invoice&name=${
                        data.docs[0].name
                    }&format=${encodeURIComponent(base.pos_profile.print_format)}&trigger_print=1&no_letterhead=${base.pos_profile.letter_head ? 1 :0 }
                    &letterhead=${base.pos_profile.letter_head}`,
                    "_blank"
                );
            }
            remove_invoice()


        },
        onError(error) {
            if (!errorHandled) {
                createToast({
                    title: 'error',
                    message: Array.isArray(error?.messages) ? error.messages[0] : error?.messages || error || 'An error occurred',
                    icon: 'x-circle',
                    iconClasses: 'bg-surface-red-5 text-ink-white rounded-md p-px',
                    position: 'top-center',
                    timeout: 5,
                });
                errorHandled = true;
            }
        },
    });
   
const getPayments = () => {
    const total = base.is_return ? -Math.abs(base.invoice.rounded_total) : base.invoice.rounded_total;

    const payments = base.invoice.payments.map(p => {
        const amount = p.default ? total : 0;
        return {
            ...p,
            amount,
            base_amount: amount
        };
    });
    
    return payments;
};
    const calcuateDiscount = () => {
        let amount = base.pos_profile.apply_discount_on === 'grand_total' ? base.invoice.grand_total : base.invoice.base_net_total + base.invoice?.discount_amount ;
        if (base.pos_profile.custom_use_percentage_discount) {
            base.discount_amount= (amount * 100) / base.additional_discount_percentage;
        } else {
            base.additional_discount_percentage = base.discount_amount * (100 / amount);
        }
    };

    watch(
        () => base.discount_amount,
        (newVal,oldVal) => {
            if (!base.pos_profile.custom_use_percentage_discount && newVal !== oldVal) { 
                calcuateDiscount();
                emitter.emit('calctotal');
            }
        },
        { flush: 'post' }
    );
    watch(
        () => base.additional_discount_percentage,
        (newVal,oldVal) => {
            if (base.pos_profile.custom_use_percentage_discount && newVal !== oldVal) {   
                calcuateDiscount();
                emitter.emit('calctotal');
            }
        },
        { flush: 'post' }
    );
    const remove_invoice = () => {
        base.invoice = {};
        base.items = [];
        base.customer = {};
        base.discount_amount = 0.00;
    };

</script>