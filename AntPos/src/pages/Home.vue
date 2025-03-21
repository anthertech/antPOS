  <template>
    <div class="w-screen h-screen">
      <div v-if="currentComponent">
          <component :is="currentComponent" />
      </div>
      <div class="w-screen h-[6%]">
        <Navbar />
      </div>
      <div class="w-screen h-[94%] flex p-2 gap-4">
        <div class="w-[3%] h-full ">
          <div class="w-full flex flex-col gap-4">
            <div class="px-[10%] w-full  shadow-2xl hover:cursor-pointer">
              <BeakerIcon class="size-6 text-blue-500" />
              <p class="w-full text-center">
                <!-- sale -->
              </p>
            </div>
            <div class="px-[10%] w-full  shadow-2xl hover:cursor-pointer">
              <FeatherIcon name="briefcase" />
              <p class="w-full text-center break-words">
                <!-- payment -->
              </p>
            </div>
          </div>
          <div>

          </div>
        </div>
        <ItemSelector v-if="!base?.invoice?.status" />
        <Invoice v-if="base.invoice.status"/>
        <ItemDetail/>
      </div>
    </div>
  </template>

  <script setup>
    import Navbar from '../component/Navbar.vue';
    import ItemSelector from '../component/ItemSelector.vue';
    import ItemDetail from '../component/ItemDetail.vue';
    import { BeakerIcon } from '@heroicons/vue/24/solid'
    import { FeatherIcon, Autocomplete, createListResource ,Button } from 'frappe-ui';
    import { computed, inject, provide , watch,  } from 'vue';
    import { useDynamicComponent } from '../utils/Dialog';
  import Invoice from '../component/Invoice.vue';

    let base = inject('base');
    const { currentComponent, loadComponent } = useDynamicComponent();
    loadComponent('OpenShift');

    provide('dynamicComponent', { currentComponent, loadComponent });


  </script>

