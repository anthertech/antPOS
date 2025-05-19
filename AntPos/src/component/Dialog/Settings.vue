<template>
    <Dialog :options="{size :'6xl'}"  v-model="dialogVisible" class="my-custom-dialog-height"  >
        <template #body-main >
            <div class="flex h-[calc(100vh_-_8rem)]">
                <div class="flex flex-col p-2 w-52 shrink-0 bg-surface-gray-2">
                    <h1 class="px-2 pt-2 mb-3 text-lg font-semibold text-ink-gray-9">
                        {{ 'Settings' }}
                    </h1>
                    
                </div>
            </div>
        </template>
    </Dialog>
</template>
<script setup>
    import { Dialog, Button, createListResource, createResource, TextInput, FeatherIcon } from 'frappe-ui';
    import { ref, inject, computed } from 'vue';
    import { createToast } from '../../utils';
    let base = inject('base');
    const dialogVisible = ref(true);
    const selectedInvoice = ref(null);
    const searchQuery = ref("");
    let errorHandled = false;
</script>
