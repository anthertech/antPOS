<template>
  <div>
    <router-view />
    <FrappeUIProvider/>
  </div>
</template>

<script setup>
  import { FrappeUIProvider } from 'frappe-ui'
</script>
