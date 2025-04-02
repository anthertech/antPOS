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
            <div class="px-[10%] w-full  shadow-2xl hover:cursor-pointer" @click="changePage('invoice')">
              <FeatherIcon name="briefcase" />
              <p class="w-full text-center">
                <!-- sale -->
              </p>
            </div>
            <div class="px-[10%] w-full  shadow-2xl hover:cursor-pointer" @click="changePage('payments')">
              <FeatherIcon name="briefcase" />
              <p class="w-full text-center break-words">
                <!-- payment -->
              </p>
            </div>
          </div>
          <div>

          </div>
        </div>
        <div v-if="base.page=='payments'" class="w-[97%] h-full ">
          <PaymentSelect />
        </div>
        <div v-else  class="w-[97%] h-full flex flex-row gap-4">
          <ItemSelector v-if="!base?.invoice?.status" />
          <Invoice v-if="base.invoice.status"/>
          <ItemDetail/>
        </div>
      </div>
    </div>
  </template>

  <script setup>
    import Navbar from '../component/Navbar.vue';
    import ItemSelector from '../component/ItemSelector.vue';
    import ItemDetail from '../component/ItemDetail.vue';
    import PaymentSelect from '../component/PaymentSelect.vue';
    import { FeatherIcon, Autocomplete, createListResource ,Button } from 'frappe-ui';
    import { computed, inject, provide , watch,  } from 'vue';
    import { useDynamicComponent } from '../utils/Dialog';
    import Invoice from '../component/Invoice.vue';

    let base = inject('base');
    const { currentComponent, loadComponent } = useDynamicComponent();
    loadComponent('OpenShift');

    provide('dynamicComponent', { currentComponent, loadComponent });

    const changePage = (page) => {
      base.items = [];
      base.invoice = {};
      base.customer = {};
      base.page = page;
    };
  </script>

