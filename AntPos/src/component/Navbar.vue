<template>
    <div class="w-full h-[6%]">
      <div class="bg-gray-300 w-full h-full flex items-center justify-between p-4 ">
        <div>
          breadcrumbs
        </div>
        <div class="flex float-right gap-4">
          <div>
            <Switch
                v-if="base?.pos_profile?.custom_create_sales_order"    
                size="sm"
                label="Sales Order"
                :disabled="false"
                v-model="createSalesOrder"
            />
          </div>
          <div>
            <Badge
              :variant="'subtle'"
              :ref_for="true"
              :class="'text-xs font-semibold'"
              theme="blue"
              size="lg"
            >
              {{ base?.Ant_Opening_Shift?.pos_profile }}

            </Badge>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    import { inject, computed } from 'vue';
    import { Switch,Button, Badge } from 'frappe-ui';
    
    const base = inject('base');
    // Computed property for v-model
    const createSalesOrder = computed({
    get() {
        return base?.pos_profile?.custom_set_sales_order === 1;
    },
    set(value) {
        if (base && base.pos_profile) {
        base.pos_profile.custom_set_sales_order = value ? 1 : 0;
        }
    },
    });
  </script>
  