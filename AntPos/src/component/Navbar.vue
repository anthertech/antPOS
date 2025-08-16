<template>
    <div class="w-full h-[6%]">
      <div class="bg-gray-300 w-full h-full flex items-center justify-between p-4 ">
        <div class="flex items-center gap-2">
          <Button
            variant="ghost"
            size="lg"
            @click="emitter.emit('trigger_collapse')"
            class="bg-gray-300 hover:bg-gray-400 rounded-full p-1.5 lg:hidden block "
          >
            <FeatherIcon name="menu" class="w-4 h-4" />
          </Button>
          <div>
            <Breadcrumbs
              :items="getBreadcrumbs"
            />
          </div>
        </div>
        <div class="flex  float-right gap-4">
          <div class="flex flex-row items-center">
            <Switch
                v-if="base?.pos_profile?.custom_create_sales_order"    
                size="sm"
                label="Sales Order"
                :disabled="false"
                v-model="createSalesOrder"
            />
            <Badge
              v-if="badgeComponent"
              :label="badgeComponent.label"
              variant="subtle"
              :class="badgeComponent.class"
              :theme="badgeComponent.theme"
              size="lg"
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
    import { Switch, Badge, FeatherIcon,Breadcrumbs } from 'frappe-ui';
    import emitter from '../utils/emitter';
    const base = inject('base');
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
    const badgeComponent = computed(() => {
      if (base?.is_return) {
        return {
          label: 'Return',
          theme: 'yellow',
          class:"'text-xs font-semibold text-yellow-300'"
        };
      } else if (base?.invoice?.docstatus) {
        return {
          label: 'Draft',
          theme: 'red',
          class:"'text-xs font-semibold'"
        };
      } else {
        return {
          label: 'Not Saved',
          theme: 'red',
          class:"'text-xs font-semibold'"
        };
      }
    });
const getBreadcrumbs = computed(() => {

  const isPos = base?.page === 'Pos';

  return [
    {
      label: isPos ? 'POS' : 'Payments',
      route: { name: 'Pos' },
    },
  ];
});  </script>
  