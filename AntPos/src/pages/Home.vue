  <template>
    <div class="w-screen h-screen flex select-none">
      <div v-if="currentComponent">
          <component :is="currentComponent"  @switchComponent="loadComponent"  />
      </div>
      <Sidebar/>
      <Platform/>
    </div>
  </template>

<script setup>
  import Sidebar from '../component/Sidebar.vue';
  import Platform from '../component/Platform.vue';
  import { provide } from 'vue';
  import { useDynamicComponent } from '../utils/Dialog';
  const { currentComponent, loadComponent } = useDynamicComponent();
  loadComponent('OpenShift');
  provide('dynamicComponent', { currentComponent, loadComponent });
</script>
