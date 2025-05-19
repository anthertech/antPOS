  <template>
    <div class="w-screen h-screen flex select-none">
      <div v-if="currentComponent">
          <component :is="currentComponent"  @switchComponent="loadComponent"  />
      </div>
      <Sidebar :collapse="collapse"/>
      <Platform/>
    </div>
  </template>

<script setup>

  import Sidebar from '../component/Sidebar.vue';
  import Platform from '../component/Platform.vue';
  import { provide, ref, inject } from 'vue';
  import { useDynamicComponent } from '../utils/Dialog';

  const collapse=ref(true)
  const { currentComponent, loadComponent } = useDynamicComponent();
  const emitter = inject('emitter');
  emitter.on('trigger_collapse', () => {
    collapse.value =!collapse.value
  });
  loadComponent('OpenShift');
  provide('dynamicComponent', { currentComponent, loadComponent });

</script>
