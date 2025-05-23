<template>
    <div>

        <div :class="['flex bg-gray-200 w-full py-2 px-3 justify-between hover:cursor-pointer text-center' ,items.open ? 'rounded-t-2xl' : 'rounded']">
            <div class="flex items-center h-[100%] rounded hover:bg-gray-300" @click="items.open = !items.open">
                <FeatherIcon :name="items.open ? 'chevron-up' : 'chevron-down'" class="w-5 h-5" />
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
        <div v-if="items.open" class="flex flex-col bg-gray-200 w-full py-1 px-3 rounded-b-2xl justify-between">
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
                    :disabled="false"
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
                    :disabled="false"
                    label="Rate"
                    placeholder="0"
                    v-model="items.rate"
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
                    :disabled="false"
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
                    :disabled="false"
                    label="Price List Rate"
                    placeholder="0"
                    v-model="items.price_list_rate"
                />
            </div>
            <div class="p-2">
                <FormControl
                    type="number"
                    :ref_for="true"
                    size="sm"
                    variant="subtle"
                    placeholder="Available QTY"
                    :disabled="false"
                    label="Available QTY"
                    v-model="items.available_qty"
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
                    v-model="items.stock_qty"
                />
            </div>
            </div>
            <div class="w-full">
                <div class="p-2">
                    <Autocomplete
                        :options="items.serial_no_options"
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
                        <FormControl
                            type="number"
                            :ref_for="true"
                            size="sm"
                            variant="subtle"
                            placeholder="Batch No Expire Date"
                            :disabled="false"
                            label="Batch No Expire Date"
                            v-model="items.stock_qty"
                        />
                    </div>
                </div>
                <div>
                    <div class="p-2 flex gap-4">
                        <div class="w-1/2">
                            <Autocomplete
                                type="select"
                                :options="getbatchNo(items.batch_nos)"
                                size="sm"
                                variant="subtle"
                                placeholder="Batch No"
                                :disabled="false"
                                label="Batch No"
                                v-model="items.batch_no"
                                :hideSearch="true"
                            />
                        </div>
                        <div class="flex items-end">
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
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { FeatherIcon, FormControl, Autocomplete, DatePicker } from 'frappe-ui';
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

const getbatchNo = (batch_nos) => {
    return batch_nos.map((batch_no) => ({
        label: batch_no.batch_no,
        value: batch_no.batch_no,
    }));
};


watch(
    () => props.items.batch_no,
    (newBatchNo, oldBatchNo) => {        
        if (newBatchNo && (newBatchNo.value !== oldBatchNo?.value) || !oldBatchNo) {
            let find = validateitems();
            if (!find && props.items.has_serial_no) {
                props.items.selected_serial_no = [];
                props.items.serial_no_options = props.items.serial_no.filter((serial_no) => serial_no.batch_no == newBatchNo)
                    .map((serial_no) => ({
                        label: serial_no.serial_no,
                        value: serial_no.serial_no,
                    }));
            }
            emitter.emit('fetchPriceList', props);

            const batch = props.items.batch_nos.find(b => b.batch_no ===newBatchNo);
            props.items.stock_qty = batch ? batch.stock_qty : 0;
            props.items.expiry_date = batch ? batch.expiry_date : null;
        }
    }
);

const validateitems = () => {
    if (!base.pos_profile.custom_allow_add_new_item_on_new_line) {
        let find = false;
        for (let index = 0; index < base.items.length; index++) {
            if (props.index !== index && base.items[props.index].item_code === base.items[index].item_code &&
                ((base.items[props.index].has_batch_no && base.items[props.index].batch_no === base.items[index].batch_no) || 
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
    emitter.emit('calctotal');
};

const calculateQtyTotal = () => {
    let total = 0;

    base.items.forEach((element) => {
        total += parseFloat(element.qty) || 0;
    });


    base.total_qty = total.toFixed(2);
};

const validateQty = (qty) => {
    if (props.items.serial_no_options){
        const availableSerials = props.items.serial_no_options.map(option => option.value);
            if (props.items.has_serial_no && qty > availableSerials.length) {
                showToast('warning', 'Qty is greater than available serial no', 'alert-circle', '#ffcc00','#ffffff')
                props.items.qty = availableSerials.length;
                return true;
            }
        return true;
    }
};

watch(
    () => props.items.selected_serial_no,
    (newSerial, oldSerial) => {
        if (props.items.serial_no_options && newSerial !== oldSerial) {
            props.items.qty = newSerial.length;
        }
    }
);

watch(
    () => props.items.qty,
    (newValue, oldValue) => {
        if (newValue !== oldValue) {
            
            if (!validateQty(newValue) ) {
                
                return;
            }
            if (props.items.serial_no_options) {
                
                adjustSerialNumbers(newValue, oldValue);
            }       
            emitter.emit('fetchPriceList', props);
            props.items.rate = rateCalculation(props.items);
            props.items.amount = props.items.rate * Math.abs(props.items.qty);
            calculateQtyTotal();
    }

    }
);

const adjustSerialNumbers = (newQty, oldQty) => {

    if (!props.items.has_serial_no || !props.items.serial_no_options ) return;
    
    const selected = props.items.selected_serial_no;
    const options = props.items.serial_no_options;
    const selectedLength = selected.length;

    if (selectedLength === newQty) return;

    // If reducing quantity
    if (selectedLength > newQty) {
        props.items.selected_serial_no = selected.slice(0, newQty);
    }
    // If increasing quantity
    else if (selectedLength < newQty) {
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
};

watch(
    () => props.items.discount_percentage,
    (newValue, oldValue) => {
        if (newValue !== oldValue || !oldValue) {
            props.items.rate = rateCalculation(props.items);
            props.items.amount = props.items.rate* Math.abs(props.items.qty);        
        }
    }
);

watch(
    () => props.items.discount_amount,
    (newValue, oldValue) => {
        if (newValue !== oldValue || !oldValue) {
            props.items.discount_percentage = (props.items.discount_amount / props.items.price_list_rate) * 100;
        }
    }
);

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
        return props.items.delivery_date || new Date().toISOString().split('T')[0]; // Format as YYYY-MM-DD
    },
    set(value) {
        props.items.delivery_date = value;
    }
});
onMounted( async () => {
    props.items.rate = rateCalculation(props.items);
    props.items.amount = props.items.rate * Math.abs(props.items.qty);
    calculateQtyTotal();
    calculateAmountTotal();
    validateQty(props.items.qty);
    adjustSerialNumbers(props.items.qty, props.items.qty);
    emitter.emit('calctotal');
});
 
onUnmounted(() => {
    calculateAmountTotal();
    calculateQtyTotal();
});
</script>