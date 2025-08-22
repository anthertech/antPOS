<!-- <template>
    <div class="w-full h-[94%] flex gap-4 rounded p-2">
        <div class="w-full h-full rounded shadow-lg  ">
            <div class="float-end bg-red-100 w-[30%] h-[5%] rounded-tr mb-4"></div>

            <ListView
                :columns="col"
                :rows="SalesInvoice.data"
                :class="$attrs.class"
                :options="{
                    
                }"
                row-key="name"
            >
            </ListView>
            
        </div>
    </div>
</template>
<script setup lang="ts">
    import {inject} from 'vue';
    let base = inject('base')
    const SalesInvoice =createListResource({
        doctype: 'Sales Invoice',

        fields: ['*'],
        
        filters: {
            docstatus: '1',
            custom_ant_opening:base?.Ant_Opening_Shift.name
        },
        auto: true,
    })
    const col = [ { "label": "Name", "type": "Data", "key": "lead_name", "width": "12rem" }, { "label": "Organization", "type": "Link", "key": "organization", "options": "CRM Organization", "width": "10rem" }, { "label": "Status", "type": "Select", "key": "status", "width": "8rem" }, { "label": "Email", "type": "Data", "key": "email", "width": "12rem" }, { "label": "Mobile No", "type": "Data", "key": "mobile_no", "width": "11rem" }, { "label": "Assigned To", "type": "Text", "key": "_assign", "width": "10rem" }, { "label": "Last Modified", "type": "Datetime", "key": "modified", "width": "8rem" } ]

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
  FeatherIcon,
  createListResource
} from 'frappe-ui'

</script> -->
<template>
    
</template>