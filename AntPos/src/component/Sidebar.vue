<template>
  <div
  :class="[
    'h-full pb-4 bg-white shadow-lg flex-col items-center transition-all duration-300 ease-in-out flex ',
    props.collapse
      ? 'w-[3%] sm:hidden lg:flex'
      : 'w-[30%] px-1 fixed inset-0 z-40 lg:w-[10%] lg:inset-auto lg:z-auto lg:relative'
  ]"
>
      <Dropdown :options="option" :class="props.collapse ? '' :'adjust w-full' " >
        <template #default>
          <button
            v-if="!props.collapse"
            class="flex h-14 items-center pb-2 mt-1 max-w-full  duration-150 ease-in-out justify-center object-cover "
            :class="props.collapse ? 'w-full ' : 'w-full  hover:bg-gray-100'"

          >
            <img
              :src="brand.logo || '/assets/ant_pos/antPOS.png'"
              alt="Brand Logo"
              class="object-cover max-h-[60%] lg:max-h-full transition-all duration-300 ease-in-out"
              :class="props.collapse ? 'h-7 w-full' : 'h-10 w-10 object-center'"
            />
            <div
              v-show="!props.collapse"
              class="flex flex-1 flex-col  text-left ml-3 transition-all duration-300 ease-in-out"
            >
              <div class="text-p-sm font-semibold text-gray-900">{{ brand.name ? brand.name : 'antPOS'}}</div>
              <div class="mt-1 text-sm text-gray-600">
                {{ currentUser.full_name }}
              </div>
            </div>
            <FeatherIcon
              v-show="!props.collapse"
              name="chevron-down"
              class="h-5 w-5 text-gray-500 "
              aria-hidden="true"
            />
          </button>
          <button
            v-else
            class="flex h-14 justify-center items-center pb-2 mt-1 duration-150 ease-in-out"
            :class="props.collapse ? 'w-full' : 'w-44 rounded-lg hover:bg-gray-100'"
          >
          <img
              :src="brand.logo || '/assets/ant_pos/antPOS.png'"
              alt="Brand Logo"
              class="object-cover transition-all duration-300 ease-in-out"
              :class="props.collapse ? 'h-full w-full m-0.5' : 'h-10 w-10'"
            />
        </button>
        </template>
      </Dropdown>
  
      <div class="w-full flex flex-col gap-3 mt-6">
        <div
            class="w-full p-2 flex gap-3 items-center hover:bg-gray-100 hover:cursor-pointer rounded-lg transition-all duration-500 ease-in-out"
            :class="[
                { 'bg-gray-100': base.page != 'payments' },
                props.collapse ? 'justify-center' : ''
            ]"
            @click="emitter.emit('updatePage', 'Pos')"
        >
            <FeatherIcon name="monitor" class="w-5 h-5 text-gray-600" />
            <p v-show="!props.collapse" class="text-gray-700 font-medium">POS</p>
        </div>
  
        <div
            class="w-full p-2 flex gap-3 items-center hover:bg-gray-100 hover:cursor-pointer rounded-lg transition-all duration-500 ease-in-out"
            :class="[
                { 'bg-gray-100': base.page === 'payments' },
                props.collapse ? 'justify-center' : ''
            ]"
            @click="emitter.emit('updatePage', 'payments')"
        >
          <FeatherIcon name="credit-card" class="w-5 h-5 text-gray-600" />
          <p v-show="!props.collapse" class="text-gray-700 font-medium">Payments</p>
        </div>
  
        <!-- <div
            class="w-full p-2 flex gap-3 items-center hover:bg-gray-100 hover:cursor-pointer rounded-lg transition-all duration-500 ease-in-out"
            :class="[
                { 'bg-gray-100': base.page === 'salesinvoice' },
                props.collapse ? 'justify-center' : ''
            ]"
            @click="emitter.emit('updatePage', 'salesinvoice')"
        >
          <FeatherIcon name="file-text" class="w-5 h-5 text-gray-600" />
          <p v-show="!props.collapse" class="text-gray-700 font-medium">Sales Invoice</p>
        </div> -->
      </div>
  
      <Button
        :varient="'solid'"
        class="mt-auto w-full flex hover:cursor-pointer transition-all duration-500 ease-in-out "
        :class="props.collapse ? 'justify-end' : ''"
        @click="emitter.emit('trigger_collapse')"
      >
      <div class="flex justify-center items-center">
        <FeatherIcon
          :name="!props.collapse ? 'chevrons-left' : 'chevrons-right'"
          class="h-5 w-5"
        />
        <span v-show="!props.collapse">Collapse</span>
      </div>
      </Button>
    </div>
  </template>
<script setup>
    import { FeatherIcon, Dropdown, createResource, Button } from 'frappe-ui';
    import { inject, ref, h, computed , defineProps} from 'vue';
    import { getSettings } from '../stores/settings'
    import { usersStore } from '../data/users';
    import emitter from '../utils/emitter';
    const { settings, brand } = getSettings()
    let base = inject('base');
    const sidebarStore = ref({"isExpanded":true})
    const { loadComponent } = inject('dynamicComponent');
    const users = usersStore()
    const currentUser = computed(() => users.getUser())
    const logout = createResource({
        url: 'logout',
        method: 'GET',
        onSuccess(data) {
        window.location.reload();
        },
    });
    const props = defineProps({
        collapse: {
            type: Boolean,
            required: true,
        },
    });
    const option=[
    {
      label: 'Close Shift',
      icon: () => h(FeatherIcon, { name: 'file-minus' }),
      onClick: () => {
        loadComponent('CloseShift')
                  },
    },
    {
      label: 'Settings',
      icon: () => h(FeatherIcon, { name: 'settings' }),
      onClick: () => {
        loadComponent('Settings')
                  },
    },
    
    {
      label: 'Logout',
      icon: () => h(FeatherIcon, { name: 'log-out' }),
      onClick: () => {
        logout.fetch();
                  },
    },
]
</script>
<style scoped>
.adjust ::v-deep > div > div >div {
  width: 100%;
}
</style>