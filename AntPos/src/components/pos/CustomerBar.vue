<template>
  <div
    class="shrink-0 bg-surface-white border-b border-outline-gray-1 flex items-center gap-2 px-3 lg:px-4 h-14"
  >
    <div class="flex-1 min-w-0">
      <Customer v-model:customer="model" :disabled="locked" />
    </div>
    <Button
      v-if="!locked"
      variant="subtle"
      theme="gray"
      size="md"
      icon="plus"
      class="shrink-0"
      label="New customer"
      title="New customer"
      @click="$emit('create')"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Button } from 'frappe-ui'
import Customer from '@/components/Customer.vue'

const props = defineProps({
  customer: { type: Object, default: () => ({}) },
  // On the payment screen the invoice is already saved against this customer;
  // changing it here would bill someone else.
  locked: { type: Boolean, default: false },
})
const emit = defineEmits(['update:customer', 'create'])

const model = computed({
  get: () => props.customer,
  set: (v) => emit('update:customer', v),
})
</script>
