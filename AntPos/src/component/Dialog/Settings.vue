<template>
    <Dialog :options="{size :'6xl'}"  v-model="dialogVisible" class="my-custom-dialog-height"  >
        <template #body-main >
            <div class="flex h-[calc(100vh_-_8rem)]">
                
                <div class="flex flex-col p-2 w-52 shrink-0 bg-surface-gray-2">
                    <h1 class="px-2 pt-2 mb-3 text-lg font-semibold text-ink-gray-9">
                        {{ 'Settings' }}
                    </h1>
                    <ul class="flex flex-col gap-2 mt-3 hover:cursor-pointer">
                        <li class=" flex items-center  gap-2 hover:bg-surface-gray-3 px-2 py-1 rounded-md">
                            <FeatherIcon
                                name="settings"
                                class="w-4 h-4 text-ink-gray-9 "
                            />
                            <h1 class=""
                            >
                                {{ 'General' }}
                            </h1>
                        </li>
                    </ul>
                </div>
                <div class="flex h-full flex-col gap-8 p-8 text-ink-gray-9">
                    <h2 class="flex gap-2 text-xl font-semibold leading-none h-5">
                        {{ 'General' }}
                        <Badge
                        v-if="settings.isDirty"
                        :label="'Not Saved'"
                        variant="subtle"
                        theme="orange"
                        />
                    </h2>
                    <div v-if="settings.doc" class="flex-1 flex flex-col gap-8 overflow-y-auto">
                        <div class="flex w-full">
                        <FormControl
                            type="text"
                            class="w-1/2"
                            v-model="settings.doc.brand_name"
                            :label="'Brand Name'"
                        />
                        </div>
                        <div class="flex flex-col justify-between gap-4">
                        <span class="text-base font-semibold text-ink-gray-9">
                            {{ 'Logo' }}
                        </span>
                        <div class="flex flex-1 gap-5">
                            <div
                            class="flex items-center justify-center rounded border border-outline-gray-modals px-10 py-2"
                            >
                            <img
                                :src="settings.doc?.brand_logo || '/assets/ant_pos/antPOS.png'"
                                alt="Logo"
                                class="size-8 rounded"
                            />
                            </div>
                            <div class="flex flex-1 flex-col gap-2">
                            <ImageUploader
                                label="Favicon"
                                image_type="image/ico"
                                :image_url="settings.doc?.brand_logo"
                                @upload="(url) => (settings.doc.brand_logo = url)"
                                @remove="() => (settings.doc.brand_logo = '')"
                            />
                            <span class="text-p-sm text-ink-gray-6">
                                Appears in the left sidebar. Recommended size is 32x32 px in PNG or SVG'
                            </span>
                            </div>
                        </div>
                        </div>
                        <div class="flex flex-col justify-between gap-4">
                        <span class="text-base font-semibold text-ink-gray-9">
                            {{'Favicon' }}
                        </span>
                        <div class="flex flex-1 gap-5">
                            <div
                            class="flex items-center justify-center rounded border border-outline-gray-modals px-10 py-2"
                            >
                            <img
                                :src="settings.doc?.favicon || '/assets/ant_pos/antPOS.png'"
                                alt="Favicon"
                                class="size-8 rounded"
                            />
                            </div>
                            <div class="flex flex-1 flex-col gap-2">
                            <ImageUploader
                                label="Favicon"
                                image_type="image/ico"
                                :image_url="settings.doc?.favicon"
                                @upload="(url) => (settings.doc.favicon = url)"
                                @remove="() => (settings.doc.favicon = '')"
                            />
                            <span class="text-p-sm text-ink-gray-6">
                                Appears next to the title in your browser tab. Recommended size is 32x32 px in PNG or ICO',
                                
                            </span>
                            </div>
                        </div>
                        </div>                         
                    </div>
                
                    <div class="flex justify-between flex-row-reverse">
                        <Button
                        variant="solid"
                        :label="'Update'"
                        @click="updateSettings"
                        />
                        
                        <ErrorMessage :message="settings.save.error" />
                    </div>
                    </div>
                <div>
                    <Button
                        variant="ghost"
                        class="absolute top-4 right-4"
                        @click="dialogVisible = false"
                    >
                        <FeatherIcon name="x" class="w-5 h-5 text-ink-gray-9" />
                    </Button>
                </div>
            </div>
        </template>
    </Dialog>
</template>
<script setup>
    import { Dialog, Button, createListResource, createResource, TextInput, FeatherIcon ,FormControl, Badge, ErrorMessage } from 'frappe-ui';
    import ImageUploader from '../Controls/ImageUploader.vue'
    import { ref, inject, computed } from 'vue';
    import { getSettings } from '../../stores/settings'
    import { createToast } from '../../utils';
    let base = inject('base');
    const dialogVisible = ref(true);
    let errorHandled = false;
    const { setting: settings, setupBrand } = getSettings()

    function updateSettings() {
    settings.save.submit(null, {
        onSuccess: () => {
        setupBrand()
        },
    })
    }
</script>
