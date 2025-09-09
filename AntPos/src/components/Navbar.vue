<template>
    <div class="w-full h-[6%]">
      <div class="bg-gray-300 w-full h-full flex items-center justify-between p-4 ">
        <div class="flex items-center gap-2">
          <Button
            variant="ghost"
            size="lg"
            class="bg-gray-300 hover:bg-gray-400 rounded-full p-1.5 lg:hidden block "
            @click="toggleSidebar()"
          >
            <FeatherIcon name="menu" class="w-4 h-4" />
          </Button>
          <div>
            {{ currentRoute }}
          </div>
        </div>
        <div  class="flex  float-right gap-4">
          <div v-if="currentRoute === 'Pos'" class="flex flex-row items-center">
            <Switch
                v-if="store.posProfileData?.custom_create_sales_order"    
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
          <div >
            
            <Badge
              :variant="'subtle'"
              :ref_for="true"
              :class="'text-xs font-semibold'"
              theme="blue"
              size="lg"
              v-if="store.posProfileData"
            >
              {{ store.posProfileData?.name }}

            </Badge>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { Switch, Badge, FeatherIcon } from 'frappe-ui';
import { usePosProfileStore } from '@/stores/posProfile';
import { useInvoiceStore } from '@/stores/pos';

const store = usePosProfileStore();
const router = useRouter();
const invoiceStore = useInvoiceStore()

const currentRoute = computed(() => router.currentRoute.value.name)
import { useSidebar } from '@/stores/sidebar';
let sidebarStore = useSidebar()

const createSalesOrder = computed({
  get() {
    return store.posProfileData?.custom_set_sales_order === 1;
  },
  set(value) {
    if (store.posProfileData) {
      store.posProfileData.custom_set_sales_order = value ? 1 : 0;
    }
  },
});

const toggleSidebar = () => {
	sidebarStore.isSidebarCollapsed = !sidebarStore.isSidebarCollapsed
	localStorage.setItem(
		'isSidebarCollapsed',
		JSON.stringify(sidebarStore.isSidebarCollapsed)
	)
}

const badgeComponent = computed(() => {
  
  if (invoiceStore.items.length === 0) {
    return {
      label: 'New',
      theme: 'green',
      class:"'text-xs font-semibold text-gray-500'"
    };
  }
  if (invoiceStore.invoice?.is_return) {
    return {
      label: 'Return',
      theme: 'yellow',
      class:"'text-xs font-semibold text-yellow-300'"
    };
  } else if (invoiceStore?.invoice?.status) {
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

</script>
  