<template>
  <div>
    <router-view />
    <Dialogs />
    <FrappeUIProvider/>
  </div>
</template>

<script setup>
  import { Dialogs } from './utils/ErrorDialog'
  import { FrappeUIProvider } from 'frappe-ui'
</script>
