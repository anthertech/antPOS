<template>
  <div>
    <router-view />
    <Dialogs />
    <Toasts/>
  </div>
</template>

<script setup>
  import { Dialogs } from './utils/ErrorDialog'
  import { Toasts } from 'frappe-ui'
</script>
