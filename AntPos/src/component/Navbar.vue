<template>
    <div class="w-full h-[6%]">

        <div class="bg-gray-300 w-full h-full flex items-center justify-between p-4 rounder-full">
            <!-- <div class="flex gap-4 items-center">
                <div>
                    <FeatherIcon name="menu" class="w-5 h-5"/>
                </div>
                <div class="flex text-center gap-3  items-center">
                    <img src="" class="w-8 h-8" alt="logo">
                    <p class="text-xl ">
                        antPOS 
                    </p>
                </div>
            </div> -->
            <div>
                breadcrumbs
            </div>
            <div class="flex  float-right gap-4">
                <div>
                    {{base?.Ant_Opening_Shift?.pos_profile}}
                </div>
                <Dropdown
                :options="[
                    {
                        label: 'Close Shift',
                        onClick: () => {
                            loadComponent('CloseShift')
                        },
                        icon: () => h(FeatherIcon, { name: 'file-minus' }),
                    },
                    {
                        label: 'Logout',
                        onClick: () => {
                            logout.fetch();
                        },
                        icon: () => h(FeatherIcon, { name: 'log-out' }),
                    },
                    ]"
                    :button="{
                        label: 'Menu',
                    }"
                    />
            </div>
        </div>
    </div>
</template>

<script setup>
    import { h ,ref, inject } from 'vue'; 
    import { Dropdown , FeatherIcon,createResource } from 'frappe-ui'

    const { loadComponent } = inject('dynamicComponent');
    const base = inject('base')
    const logout = createResource({
        url: 'logout',
        method: 'GET',
        onSuccess(data) {
        window.location.reload();
        },
    });

</script>