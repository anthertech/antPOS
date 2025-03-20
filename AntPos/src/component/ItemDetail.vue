<template>
    <div class="w-1/2 h-full select-none flex flex-col gap-2">
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
            <div class="py-2 pr-3 h-[93%] overflow-y-scroll scrollbar-hide  ">
                <div class="mb-2">
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
                <div v-for="(item, key) in base.items" :key="key" class="flex flex-col justify-between mb-2 ">
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
                    placeholder="0"
                    :disabled="true"
                    label="Total Qty"
                    v-model="base.total_qty"
                />
                <FormControl
                    :type="'number'"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="0"
                    :disabled="false"
                    label="Additional Discount"
                    v-model="base.additional_discount"
                />
                <FormControl
                    :type="'number'"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="0"
                    :disabled="true"
                    label="Item Discount"
                    v-model="base.item_discount"
                />
                <FormControl
                    :type="'number'"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="0"
                    :disabled="true"
                    label="Total"
                    v-model="base.total"
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
                    class="bg-orange-600 text-yellow-50"
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
                    class="bg-cyan-600 text-yellow-50"
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
                    class="bg-violet-600 text-yellow-50"
                    @click="post.fetch({ action:'Save', status:'save_new' })"
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
                    class="bg-green-600 text-yellow-50"
                    @click="post.fetch({ action:'Save', status:'pay' })"
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
                    class="bg-teal-600 text-yellow-50"
                    @click="post.fetch({ action:'Save', status:'print' })"
                >
                    SAVE & PRINT
                </Button>
            </div>
        </div>
    </div>
</template>

<script setup>

    import Customer from './Customer.vue';
    import { Button, FeatherIcon , FormControl , createResource } from 'frappe-ui';
    import { inject , watch  } from 'vue';
    import { createToast } from '../utils';
    import Held from './Dialog/Held.vue';
    import Item from './Item.vue';
    import Return from './Dialog/Return.vue';

    const { loadComponent } = inject('dynamicComponent');
    let base = inject('base');
    let status = '';
    const emitter = inject('emitter');
    let errorHandled = false;
    let post = createResource({
        url: 'frappe.desk.form.save.savedocs',
        makeParams(params) {
            base.items.forEach((item) => {
                item.serial_no=item.selected_serial_no.join('\n');
            });
            status = params.status
            return {
                doc: JSON.stringify({
                    ...base?.invoice,
                    doctype: 'Sales Invoice',
                    is_pos:1,
                    pos_profile:base.pos_profile.name,
                    company: base.pos_profile.company,
                    conversion_rate:1,
                    selling_price_list:base.pos_profile.selling_price_list,
                    items:base.items,
                    customer:base.customer.name,
                    update_stock :1,
                    
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
                    title: 'Error',
                    text: Array.isArray(error?.messages) ? error.messages[0] : error?.messages || error || 'An error occurred',
                    icon: 'x',
                    iconClasses: 'bg-surface-red-5 text-ink-white rounded-md p-px',
                    position: 'top-center',
                    timeout: 5,
                });
                errorHandled = true;
            }
        },
    });
        const baseurl = createResource({
        url: 'ant_pos.ant_pos.utils.get_domain_url',

        onSuccess(data) {
            console.log(data,"ppppppppp");
            
            }

    });

    watch(
        () => base.items,
        (newSerial, oldSerial) => {
            if (newSerial!==oldSerial) {
                emitter.emit('calctotal');
            }
        }
    );

    watch(
        () => base.additional_discount,
        (newSerial, oldSerial) => {
            if (newSerial!==oldSerial) {
                emitter.emit('calctotal');
            }
        }
    );
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
</script>