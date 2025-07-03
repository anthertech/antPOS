<template>
    <div>
        <div :class="['flex bg-gray-200 w-full py-2 px-3 justify-between hover:cursor-pointer text-center' ,items.custom_open ? 'rounded-t-2xl' : 'rounded']">
            <div class="flex items-center h-[100%] rounded hover:bg-gray-300" @click="items.custom_open = !items.custom_open">
                <FeatherIcon :name="items.custom_open ? 'chevron-up' : 'chevron-down'" class="w-5 h-5" />
            </div>
            <div class="w-[18.4%]">
                {{ items.item_code }} 
            </div>
            <div class="w-[18.4%]">
                {{ items.qty }}
            </div>
            <div class="w-[18.4%]">
                {{ items.uom }}
            </div>
            <div class="w-[18.4%]">
                {{ Number(items.rate).toFixed(2) }}
            </div>
            <div class="w-[18.4%]">
                {{ items.amount ? items.amount.toFixed(2) : '0.00' }}
            </div>
            <div class="w-[8%] flex items-center justify-center">
                <FeatherIcon name="trash-2" class="w-5 h-5 rounded hover:bg-red-400 fill-red-700" @click="base.items.splice(index, 1)" />
            </div>
        </div>
        <div v-if="items.custom_open" class="flex flex-col bg-gray-200 w-full py-1 px-3 rounded-b-2xl justify-between">
            <div class="grid grid-cols-3 w-full gap-4">
                <div class="p-2">
                    <FormControl
                        type="text"
                        :ref_for="true"
                        size="sm"
                        variant="subtle"
                        placeholder="items Code"
                        :disabled="true"
                        label="items Code"
                        v-model="items.item_code"
                    />
                </div>
                <div class="p-2">
                    <FormControl
                        type="number"
                        :ref_for="true"
                        size="sm"
                        variant="subtle"
                        placeholder="0"
                        :disabled="false"
                        label="QTY"
                        v-model="items.qty"
                    />
                </div>
                <div class="p-2">
                    <FormControl
                    type="text"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="UOM"
                    :disabled="true"
                    label="UOM"
                    v-model="items.uom"
                />
            </div>
            <div class="p-2">
                <FormControl
                    type="number"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    :disabled="!base.pos_profile.custom_edit_rate"
                    label="Rate"
                    placeholder="0"
                    v-model="items.rate"
                />
            </div>
            <div class="p-2">
                <FormControl
                    type="text"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    :disabled="true"
                    label="Price List Rate"
                    placeholder="0"
                    v-model="items.price_list_rate"
                />
            </div>
            <div class="p-2">
                <FormControl
                    type="text"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    :disabled="true"
                    label="Net Rate"
                    placeholder="0"
                    v-model="items.net_rate"
                />
            </div>
            <div class="p-2">
                <FormControl
                    type="number"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="Discount Percentage"
                    :disabled="false"
                    label="Discount Percentage"
                    v-model="items.discount_percentage"
                />
            </div>
            <div class="p-2">
                <FormControl
                    type="number"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    :disabled="true"
                    label="Discount Amount"
                    placeholder="0"
                    v-model="items.discount_amount"
                />
            </div>
            
            <div class="p-2">
                <FormControl
                    type="text"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="Group"
                    :disabled="true"
                    label="Group"
                    v-model="items.item_group"
                />
            </div>
            <div class="p-2">
                <FormControl
                    type="number"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="Stock Qty"
                    :disabled="true"
                    label="Stock Qty"
                    v-model="items.stock_qty"
                />
            </div>
            <div class="p-2">
                <FormControl
                    type="text"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="Stock UOM"
                    :disabled="true"
                    label="Stock UOM"
                    v-model="items.stock_uom"
                />
            </div>
            <div class="p-2">
                <FormControl
                    type="number"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="Serial No Qty"
                    :disabled="true"
                    label="Serial No Qty"
                    v-model="serialNoQty"
                />
            </div>
            <div class="flex items-center">
                <DatePicker
                    v-if="base.pos_profile.custom_set_sales_order"
                    size="sm"
                    variant="subtle"
                    label="Delivery Date"
                    placeholder="Delivery Date"
                    :disabled="false"
                    v-model="deliveryDate"
                    :unique="true"
                    />
                </div>
            </div>
            <div class="w-full">
                <div class="p-2">
                    <Autocomplete
                        :options="get_serial_no_options()"
                        placeholder="Serial No"
                        :multiple="true"
                        v-model="items.selected_serial_no"
                    />
                </div>
                <div class="grid grid-cols-2 w-full gap-4">
                    <div class="p-2">
                        <FormControl
                            type="number"
                            :ref_for="true"
                            size="sm"
                            variant="subtle"
                            placeholder="Batch No Available QTY"
                            :disabled="false"
                            label="Batch No Available QTY"
                            v-model="items.stock_qty"
                        />
                    </div>
                        <div class="p-2">
                       
                        <DatePicker
                            size="sm"
                            variant="subtle"
                            label="Expiry Date"
                            placeholder="Expiry Date"
                            :disabled="false"
                            v-model="items.expiry_date"
                        />
                </div>

                </div>
                <div>
                    <div class="p-2 flex gap-4">
                        <div class="w-full">
                            <Autocomplete
                                type="select"
                                :options="getbatchNo()"
                                size="sm"
                                variant="subtle"
                                placeholder="Batch No"
                                :disabled="false"
                                label="Batch No"
                                v-model="items.selected_batch_no"
                                :hideSearch="true"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { FeatherIcon, FormControl, Autocomplete, DatePicker, dayjsLocal, createResource, createListResource } from 'frappe-ui';
import { inject, watch, defineProps, onMounted, onUnmounted, computed } from 'vue';
import { showToast } from '../utils'

let base = inject('base');
const emitter = inject('emitter');

const props = defineProps({
    items: {
        type: Object,
        required: true,
    },
    index: {
        type: Number,
        required: true,
    },
});
const get_batch = createResource({
        url: 'ant_pos.ant_pos.api.item.get_batches_list',
        method: 'POST',
        auto: false,
        makeParams(params) {
            return {
                ...params
            }
        },
    })
    
    const get_serial_no = createListResource({
        url: 'frappe.client.get_list',
        method: 'POST',
        auto: false,
        doctype: 'Serial No',
        fields: ['name as serial_no', 'batch_no' ],
        filters: {
            warehouse: base.pos_profile.warehouse,
            item_code: props.items.item_code,
        },
        cache: props.items.serial_no_options,
        pageLength: Number.MAX_VALUE * 2,
        onSuccess(data) {            
            props.items.serial_no_options = data.map((serial_no) => ({
                label: serial_no.serial_no,
                value: serial_no.serial_no,
                batch_no: serial_no.batch_no
            }));
        },
    });
const get_serial_no_options = () => {
    
    const { has_batch_no, batch_no } = props.items;

    let serials = get_serial_no.data || [];
    
    const batchValue = typeof batch_no === 'object' ? batch_no?.value : batch_no;
    
    if (props.items.batch_no != null) {
        
        serials = serials.filter(serial_no => serial_no.batch_no === props.items.batch_no);
    }
    
    
    return serials.map(serial_no => ({
        label: serial_no.serial_no,
        value: serial_no.serial_no,
    }));
};
    const getbatchNo =  () => {
    return get_batch.data.map((batch_no) => ({
        label: batch_no.batch_id,
        value: batch_no.batch_id,
    }));
};

const serialNoQty = computed(() => props.items?.serial_no_options?.length || 0);

watch(
    () => props.items.selected_batch_no,
    (newBatchNo, oldBatchNo) => {        
        
        if (newBatchNo && (newBatchNo.value !== oldBatchNo?.value) || !oldBatchNo) {
            
            let find = validateitems();
            if (!find && props.items.has_serial_no) {
                props.items.selected_serial_no = [];
            props.items.serial_no_options = props.items.all_serial_no.filter((serial_no) => serial_no.batch_no === newBatchNo)
                .map((serial_no) => serial_no.serial_no);
                add_serial_no();
            }

            const batch = get_batch.data.find(b => b.batch_no ===newBatchNo);
            props.items.stock_qty = batch ? batch.stock_qty : 0;
            props.items.expiry_date = batch ? batch.expiry_date : null;

            props.items.batch_no = typeof newBatchNo === 'object' ? newBatchNo?.value : newBatchNo;
            
            
        }
    }
);

const validateitems = () => {
    if (!base.pos_profile.custom_new_items_on_new_line) {
        let find = false;
        for (let index = 0; index < base.items.length; index++) {
            if (props.index !== index && base.items[props.index].item_code === base.items[index].item_code &&
                ((base.items[props.index].has_batch_no && base.items[props.index].batch_no === base.items[index].batch_no && !base.items[props.index].is_return) || 
                !base.items[props.index].has_batch_no)) { 
                    base.items.selected_serial_no= mergeSerial_no(base.items[props.index].selected_serial_no,base.items[index].selected_serial_no)
                    base.items.splice(props.index, 1);
                    find = true;
                    return find;
            }
        }
        return find;
    }
};

const mergeSerial_no = (left, right) => {

  const leftValues = left.map(sn => sn.value);
  
  const rightValues = right.map(sn => sn.value);

  const mergedValues = [...new Set([...leftValues, ...rightValues])];

  return mergedValues.map(serial => ({ label: serial, value: serial }));
};

const calculateAmountTotal = () => {
    props.items.amount = Math.abs(props.items.qty) * props.items.rate
    
};


const validateQty = () => {
    if (props.items.serial_no_options) {
        const availableSerials = props.items.serial_no_options.map(option => option.value);
            if (props.items.has_serial_no && props.items.qty > availableSerials.length) {
                showToast('warning', 'Qty is greater than available serial no', 'alert-circle', '#ffcc00','#ffffff')
                props.items.qty = base.is_return ?  -Math.abs(availableSerials.length) : availableSerials.length ;
            }
            if (props.items.qty!== props.items.selected_serial_no.length) {
                props.items.qty = props.items.selected_serial_no.length;
            }
    }
    return ;
};
const add_serial_no = () =>{

    props.items.serial_no = props.items.selected_serial_no.map(sn => sn).join('\n');
    // props.items.qty = props.items.selected_serial_no.length;
    

}



watch(
    () => props.items.selected_serial_no,
    (newSerial, oldSerial) => {
        
        
        if (((props.items.serial_no_options && newSerial !== oldSerial) || !oldSerial)) {
            add_serial_no()
            validateQty(newSerial.length);
        }
    }
);
watch(
    () => props.items.price_list_rate,
    (newSerial, oldSerial) => {
        if (props.items.price_list_rate && newSerial !== oldSerial) {
            props.items.rate = props.items.price_list_rate ;
        }
    }
);
watch(
    () => props.items.qty,
    (newValue, oldValue)  =>  {
        if (newValue !== oldValue)  {
            adjustSerialNumbers(newValue);
            emitter.emit('calctotal');          

    }

    }
);


const adjustSerialNumbers = (newQty) => {
    
    if (!props.items.has_serial_no || !props.items.serial_no_options ) return;
    
    
    const selected = props.items.selected_serial_no;
    
    const options = props.items.serial_no_options;
    const selectedLength = selected.length;
    
    
    
    if (selectedLength === newQty) return;

    // If reducing quantity
    if (Math.abs(selectedLength) > Math.abs(newQty)) {
        props.items.selected_serial_no = selected.slice(0, newQty);
        

    }
    // If increasing quantity
    else if (Math.abs(selectedLength) < Math.abs(newQty)) {
        
        const selectedValues = new Set(selected.map(sn => sn.value));
        const needed = newQty - selectedLength;

        const additional = [];
        for (let i = 0; i < options.length && additional.length < needed; i++) {
            const opt = options[i];
            if (!selectedValues.has(opt.value)) {
                additional.push(opt);
            }
        }

        props.items.selected_serial_no = [...selected, ...additional];
    }

    // Ensure the qty is aligned with the actual selected_serial_no length
    
    props.qty = props.items.selected_serial_no.length;
    
    // emitter.emit('calctotal');

};

// watch(
//     () => props.items.discount_percentage,
//     (newValue, oldValue) => {
//         if (newValue !== oldValue || !oldValue) {
//             discountCalculation();
//         }
//     }
// );

base.items.forEach((items) => {
    watch(
        () => items,
        () => {
            calculateAmountTotal();
        },
        { deep: true }
    );
});

const  rateCalculation =  (item) => {
    const rate = item.price_list_rate || item.rate;
    const discount = item.discount_percentage || 0;
    
    return rate - (rate * (discount / 100));
};
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

watch(
    () => props.items.rate,
    (newValue, oldValue) => {
        if (newValue !== oldValue) {
            calculateRateTotal();

        }
    }
);
const calculateRateTotal = () => {
    props.items.rate = rateCalculation(props.items);
    calculateAmountTotal();
};

onMounted( async () => {
    emitter.emit('calctotal');
    
    calculateRateTotal();
    validateQty(props.items.qty);
    adjustSerialNumbers(props.items.selected_serial_no.length);
    add_serial_no();
    await get_batch.fetch({
        item_code: props.items.item_code,
        warehouse: base.pos_profile.warehouse,
    })
    await get_serial_no.fetch()
    
});
 
onUnmounted(() => {
    
    calculateAmountTotal();
    emitter.emit('calctotal');          

});
</script>