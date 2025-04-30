<template>
    <div class="w-full h-[94%] flex gap-4 rounded p-2">
        <div class="w-full h-full rounded shadow-lg ">
            <ListView>
                <ListHeader>
                    hiii
                </ListHeader>
            </ListView>
        </div>
    </div>
</template>
<script setup>
    const SalesInvoice =createListResource({
        doctype: 'Sales Invoice',

        fields: ['name'],
        
        filters: {
            docstatus: '1'
        },
        auto: true,
    })
    import {
  Avatar,
  ListView,
  ListHeader,
  ListHeaderItem,
  ListSelectBanner,
  ListRowItem,
  ListFooter,
  Dropdown,
  Tooltip,
  createListResource
} from 'frappe-ui'
</script>