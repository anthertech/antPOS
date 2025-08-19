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
                    :disabled="!base.pos_profile.allow_rate_change"
                    label="Rate"
                    placeholder="0"
                    :value="Number(items.rate).toFixed(2)"
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
                    :value="Number(items.price_list_rate).toFixed(2)"
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
                    :value="Number(items.net_rate).toFixed(2)"
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
                    :value="Number(items.discount_amount).toFixed(2)"
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
                                :disabled="base.is_return"
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
import { FeatherIcon, FormControl, Autocomplete, DatePicker, dayjsLocal, createResource, createListResource,debounce } from 'frappe-ui';
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
    let serials = []
    const { has_batch_no, batch_no } = props.items;
    if (base.is_return){
        serials=props.items._serial || []
        return serials.map(serial_no => ({
        label: serial_no,
        value: serial_no,
    }));
    }
    serials =  get_serial_no.data || [];
    
    if (props.items.batch_no != null && !base.is_return) {
        serials = serials.filter(serial_no => serial_no.batch_no === props.items.batch_no);
    }
    
    
    return serials.map(serial_no => ({
        label: serial_no.serial_no,
        value: serial_no.serial_no,
    }));
};
    const getbatchNo =  () => {
    if (base.is_return) {
        return [{
            label: props.items.batch_no,
            value: props.items.batch_no,
        }];
    }
    
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
            const option =get_serial_no_options() 
            
            if (!find && option.length > 0) {
                
                props.items.selected_serial_no = [];
                props.items.serial_no_options = props.items.serial_no_options.filter((serial_no) => serial_no.batch_no == newBatchNo)
                    .map((serial_no) => ({
                        label: serial_no.serial_no,
                        value: serial_no.serial_no,
                    }));
                add_serial_no();
            }

            const batch = get_batch.data.find(b => b.batch_no ===newBatchNo);
            props.items.stock_qty = batch ? batch.stock_qty : 0;
            props.items.expiry_date = batch ? batch.expiry_date : null;

            props.items.batch_no = typeof newBatchNo === 'object' ? newBatchNo?.value : newBatchNo;
            emitter.emit('calctotal')

            
            
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
        const options = get_serial_no_options()
            if (options.length > 0 && props.items.qty > options.length) {
                showToast('warning', 'Qty is greater than available serial no', 'alert-circle', '#ffcc00','#ffffff')
                props.items.qty = base.is_return ?  -Math.abs(options.length) : options.length;
            }
            
    }
    return ;
};
const add_serial_no = () =>{  
    props.items.serial_no = props.items.selected_serial_no.map(sn => sn.value).join('\n');
}



watch(
    () => props.items.selected_serial_no,
    (newSerial, oldSerial) => {
        if (((props.items.serial_no_options && newSerial !== oldSerial) || !oldSerial)) {
            add_serial_no()
            adjustQtyNumbers(props.items.qty)
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
            const option= get_serial_no_options()
            if (option.length > 0){
                adjustSerialNumbers(newValue);
                validateQty()
                add_serial_no()
            }
            emitter.emit('calctotal');          

        }
    }
);

const adjustQtyNumbers = () =>{
    const options = get_serial_no_options();    
    if (options.length < 0 ) return;
    
    const qty = props.items.qty
    const serialLength = props.items.selected_serial_no.length
    if (qty!=serialLength){
        
        props.items.qty = base.is_return ?  -Math.abs(serialLength) : serialLength;
    }    
}



const adjustSerialNumbers = (newQty) => {
    const options = get_serial_no_options();
    if (options.length < 0 ) return;
    const selected = props.items.selected_serial_no;
    
    const selectedLength = selected.length ;
        
    if (Math.abs(selectedLength) === Math.abs(newQty))return; 
    
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
        
        props.items.selected_serial_no = JSON.parse(JSON.stringify([...selected, ...additional]));
    }
    

};

watch(
    () => props.items.discount_percentage,
    (newValue, oldValue) => {
        if (newValue !== oldValue || !oldValue) {
            discountCalculation()
        }
    }
);
const discountCalculation = debounce(() => {
    props.items.rate = rateCalculation(props.items);
    props.items.amount = props.items.rate* Math.abs(props.items.qty); 
    props.items.discount_amount= (props.items.price_list_rate - props.items.rate) * Math.abs(props.items.qty)     
    emitter.emit('calctotal')
},300);
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
    calculateRateTotal();
    validateQty(props.items.qty);
    if(props.items.selected_serial_no) adjustSerialNumbers(props.items.selected_serial_no.length); 
    if(props.items.selected_serial_no) add_serial_no();
    await get_batch.fetch({
        item_code: props.items.item_code,
        warehouse: base.pos_profile.warehouse,
    })
    await get_serial_no.fetch()
    emitter.emit('calctotal');    
    
});
 
onUnmounted(() => {
    
    calculateAmountTotal();
    emitter.emit('calctotal');          

});
</script>