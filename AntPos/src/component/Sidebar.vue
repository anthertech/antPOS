<template>
    <div class="w-[10%] h-full py-4 px-3 bg-white shadow-lg flex flex-col items-center">
        <Dropdown :options="option">   
            <template #default>
                <button
                    class="flex h-14 items-center rounded-lg py-2  shadow-lg duration-300 hover:bg-gray-100 ease-in-out w-44"
                >
                    <img
                        src="https://www.anther.tech/files/anthr1-lg.png"
                        alt="Brand Logo"
                        class="h-10 w-10 shrink-0 object-cover rounded-lg"
                    />
                    <div
                        class="flex flex-1 flex-col text-left duration-300 ease-in-out ml-3"
                    >
                        <div class="text-lg font-semibold text-gray-900">
                            antPOS
                        </div>
                        <div class="mt-1 text-sm text-gray-600">
                            {{ currentUser.full_name }}
                        </div>
                    </div>
                    <FeatherIcon
                        name="chevron-down"
                        class="h-5 w-5 text-gray-500"
                        aria-hidden="true"
                    />
                </button>
            </template>
        </Dropdown>
        <div class="w-full flex flex-col gap-3 mt-6 ">
            <div 
                class="w-full shadow-lg p-1  flex gap-3 items-center hover:bg-gray-100 hover:cursor-pointer rounded-lg  transition-all duration-200"
                :class="{'bg-gray-100': base.page === 'invoice'}"
                @click="emitter.emit('updatePage', 'invoice')"
            >
                <FeatherIcon name="monitor" class="w-5 h-5 text-gray-600" />
                <p class="text-gray-700 font-medium">POS</p>
            </div>
            <div 
                class="w-full shadow-lg p-1   flex gap-3 items-center hover:bg-gray-100 hover:cursor-pointer rounded-lg  transition-all duration-200"
                :class="{'bg-gray-100': base.page === 'payments'}"
                @click="emitter.emit('updatePage', 'payments')"
            >
                <FeatherIcon name="credit-card" class="w-5 h-5 text-gray-600" />
                <p class="text-gray-700 font-medium">Payments</p>
            </div>
            <div 
                class="w-full shadow-lg p-1  flex gap-3 items-center hover:bg-gray-100 hover:cursor-pointer rounded-lg  transition-all duration-200"
                :class="{'bg-gray-100': base.page === 'payments'}"
                @click="emitter.emit('updatePage', 'payments')"
            >
                <FeatherIcon name="file-text" class="w-5 h-5 text-gray-600" />
                <p class="text-gray-700 font-medium">Sales Invoice</p>
            </div>
        </div>
        <div class="mt-auto w-full flex hover:cursor-pointer ">
            <FeatherIcon name="chevrons-left" class="h-5 w-5"/>
            Collapse
        </div>
    </div>
</template>

<script setup>
    import { FeatherIcon, Dropdown } from 'frappe-ui';
    import { inject, ref, computed } from 'vue';
    import { usersStore } from '../data/users';
    let base = inject('base');
    const emitter = inject('emitter');
    const sidebarStore = ref({"isExpanded":true})
    const users = usersStore()
    const currentUser = computed(() => users.getUser())
    const option=[
    {
      label: 'Close Shift',
      onClick: () => {
                  },
    },
    {
      label: 'Settings',
      onClick: () => {
                  },
    },
    {
      label: 'Logout',
      onClick: () => {
                  },
    },
]
</script>