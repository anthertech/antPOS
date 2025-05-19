<template>
    <div
      class="h-full pb-4 px-3 bg-white shadow-lg flex flex-col items-center transition-all duration-300 ease-in-out"
      :class="props.collapse ? 'w-[3%]' : 'w-[10%]'"
    >
      <Dropdown :options="option">
        <template #default>
          <button
            v-if="!props.collapse"
            class="flex h-14 items-center pb-2 mt-1 duration-150 ease-in-out justify-center "
            :class="props.collapse ? 'w-full' : 'w-44 rounded-lg hover:bg-gray-100'"
          >
            <img
              src="https://www.anther.tech/files/anthr1-lg.png"
              alt="Brand Logo"
              class="object-cover transition-all duration-300 ease-in-out"
              :class="props.collapse ? 'h-7 w-full' : 'h-10 w-10'"
            />
            <div
              v-show="!props.collapse"
              class="flex flex-1 flex-col text-left ml-3 transition-all duration-300 ease-in-out"
            >
              <div class="text-lg font-semibold text-gray-900">antPOS</div>
              <div class="mt-1 text-sm text-gray-600">
                {{ currentUser.full_name }}
              </div>
            </div>
            <FeatherIcon
              v-show="!props.collapse"
              name="chevron-down"
              class="h-5 w-5 text-gray-500"
              aria-hidden="true"
            />
          </button>
          <button
            v-else
            class="flex h-14 items-center pb-2 mt-1 duration-150 ease-in-out"
            :class="props.collapse ? 'w-full' : 'w-44 rounded-lg hover:bg-gray-100'"
          >
          <img
              src="https://www.anther.tech/files/anthr1-lg.png"
              alt="Brand Logo"
              class="object-cover transition-all duration-300 ease-in-out"
              :class="props.collapse ? 'h-7 w-full' : 'h-10 w-10'"
            />
        </button>
        </template>
      </Dropdown>
  
      <div class="w-full flex flex-col gap-3 mt-6">
        <div
            class="w-full shadow-lg p-1 flex gap-3 items-center hover:bg-gray-100 hover:cursor-pointer rounded-lg transition-all duration-500 ease-in-out"
            :class="[
                { 'bg-gray-100': base.page === 'salesinvoice' },
                props.collapse ? 'justify-center' : ''
            ]"
            @click="emitter.emit('updatePage', 'invoice')"
        >
          <FeatherIcon name="monitor" class="w-5 h-5 text-gray-600" />
          <p v-show="!props.collapse" class="text-gray-700 font-medium">POS</p>
        </div>
  
        <div
            class="w-full shadow-lg p-1 flex gap-3 items-center hover:bg-gray-100 hover:cursor-pointer rounded-lg transition-all duration-500 ease-in-out"
            :class="[
                { 'bg-gray-100': base.page === 'salesinvoice' },
                props.collapse ? 'justify-center' : ''
            ]"
            @click="emitter.emit('updatePage', 'payments')"
        >
          <FeatherIcon name="credit-card" class="w-5 h-5 text-gray-600" />
          <p v-show="!props.collapse" class="text-gray-700 font-medium">Payments</p>
        </div>
  
        <div
            class="w-full shadow-lg p-1 flex gap-3 items-center hover:bg-gray-100 hover:cursor-pointer rounded-lg transition-all duration-500 ease-in-out"
            :class="[
                { 'bg-gray-100': base.page === 'salesinvoice' },
                props.collapse ? 'justify-center' : ''
            ]"
            @click="emitter.emit('updatePage', 'salesinvoice')"
        >
          <FeatherIcon name="file-text" class="w-5 h-5 text-gray-600" />
          <p v-show="!props.collapse" class="text-gray-700 font-medium">Sales Invoice</p>
        </div>
      </div>
  
      <div
        class="mt-auto w-full flex hover:cursor-pointer transition-all duration-500 ease-in-out"
        :class="props.collapse ? 'justify-end' : ''"
        
        @click="emitter.emit('trigger_collapse')"
      >
        <FeatherIcon
          :name="!props.collapse ? 'chevrons-left' : 'chevrons-right'"
          class="h-5 w-5"
        />
        <span v-show="!props.collapse">Collapse</span>
      </div>
    </div>
  </template>
<script setup>
    import { FeatherIcon, Dropdown, createResource } from 'frappe-ui';
    import { inject, ref, h, computed , defineProps} from 'vue';
    import { usersStore } from '../data/users';
    let base = inject('base');
    const emitter = inject('emitter');
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