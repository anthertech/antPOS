<template>
  <div class="flex min-h-0 flex-1 flex-col">
    <div class="min-h-0 flex-1 overflow-y-auto pos-scroll px-3 pb-3">
      <!-- Loading: only on the first load; refreshes keep the current list. -->
      <div
        v-if="list.loading && !list.data"
        class="grid gap-2 pt-3"
        :class="gridClass"
        aria-busy="true"
      >
        <div
          v-for="n in 8"
          :key="n"
          class="flex h-[6.5rem] flex-col rounded-lg border border-outline-gray-1 p-2"
        >
          <div class="flex gap-2">
            <div class="h-10 w-10 animate-pulse rounded-md bg-surface-gray-2" />
            <div class="flex-1 space-y-1.5">
              <div class="h-3 w-4/5 animate-pulse rounded bg-surface-gray-2" />
              <div class="h-3 w-1/2 animate-pulse rounded bg-surface-gray-2" />
            </div>
          </div>
          <div
            class="mt-auto h-3.5 w-1/3 animate-pulse rounded bg-surface-gray-2"
          />
        </div>
      </div>

      <div v-else-if="list.error && !list.data" class="px-4 py-10 text-center">
        <p class="text-base font-medium text-ink-gray-8">
          Items could not be loaded
        </p>
        <p class="mt-1 text-sm text-ink-gray-5">{{ errorMessage }}</p>
        <Button class="mt-3" variant="subtle" @click="load(true)"
          >Try again</Button
        >
      </div>

      <template v-else-if="list.data">
        <section v-if="mostMoving.length" class="pt-3">
          <h3
            class="mb-2 flex items-center gap-1.5 text-sm font-medium text-ink-gray-7"
          >
            <LucideTrendingUp class="h-4 w-4 text-ink-amber-3" />
            Most moving
            <span class="font-normal text-ink-gray-5"
              >· last {{ settings.most_moving_days }} days</span
            >
          </h3>
          <div class="grid gap-2" :class="gridClass">
            <ItemCard
              v-for="item in mostMoving"
              :key="`mm-${item.item_code}`"
              :item="item"
              :hide-images="hideImages"
              :disabled="disabled"
              :allow-negative-stock="allowNegativeStock"
              highlight
              @select="$emit('select', item)"
            />
          </div>
        </section>

        <section class="pt-3">
          <h3
            class="mb-2 flex items-center justify-between gap-2 text-sm font-medium text-ink-gray-7"
          >
            <span class="truncate">{{
              searching ? `Results for “${query.trim()}”` : 'All items'
            }}</span>
            <span class="num shrink-0 font-normal text-ink-gray-5">{{
              items.length
            }}</span>
          </h3>

          <div v-if="items.length" class="grid gap-2" :class="gridClass">
            <ItemCard
              v-for="item in items"
              :key="item.item_code"
              :item="item"
              :hide-images="hideImages"
              :disabled="disabled"
              :allow-negative-stock="allowNegativeStock"
              @select="$emit('select', item)"
            />
          </div>

          <div
            v-else
            class="rounded-lg border border-dashed border-outline-gray-2 px-4 py-8 text-center"
          >
            <p class="text-sm text-ink-gray-6">
              {{
                searching
                  ? 'No items match. Press Enter to look it up as a barcode, serial or batch number.'
                  : 'No items to show. Check the item groups on this POS Profile.'
              }}
            </p>
          </div>

          <p
            v-if="!searching && items.length >= settings.limit"
            class="mt-2 text-center text-xs text-ink-gray-5"
          >
            Showing the first {{ settings.limit }} items. Search to find others.
          </p>
        </section>
      </template>
    </div>

    <footer
      v-if="list.data"
      class="flex h-9 shrink-0 items-center justify-between gap-2 border-t border-outline-gray-1 px-3 text-xs text-ink-gray-5"
    >
      <span class="truncate">
        <template v-if="searching">Live search</template>
        <template v-else-if="settings.cache">{{ freshness }}</template>
        <template v-else>Live · caching off</template>
      </span>
      <Button
        variant="ghost"
        size="sm"
        :loading="list.loading"
        :disabled="list.loading"
        @click="load(true)"
      >
        <template #prefix><LucideRefreshCw class="h-3.5 w-3.5" /></template>
        Refresh
      </Button>
    </footer>
  </div>
</template>

<script setup>
import { computed, onUnmounted, ref, watch } from 'vue'
import { Button, createResource, debounce } from 'frappe-ui'
import LucideTrendingUp from '~icons/lucide/trending-up'
import LucideRefreshCw from '~icons/lucide/refresh-cw'
import ItemCard from '@/components/pos/ItemCard.vue'
import { usePosProfileStore } from '@/stores/posProfile'

const props = defineProps({
  // Text typed in the scan box. Filters the list live; Enter still scans.
  query: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  // Narrow containers (the mobile sheet) need smaller cards.
  dense: { type: Boolean, default: false },
})
defineEmits(['select'])

const profileStore = usePosProfileStore()
const profileName = computed(() => profileStore.posProfileData?.name)

const list = createResource({
  url: 'ant_pos.ant_pos.api.item_list.get_item_list',
  method: 'GET',
  auto: false,
  makeParams: ({ refresh = 0 } = {}) => ({
    pos_profile: profileName.value,
    search_text: props.query.trim(),
    refresh,
  }),
})

const searching = computed(() => Boolean(props.query.trim()))
const settings = computed(
  () => list.data?.settings || { limit: 50, most_moving_days: 30, cache: 1 },
)
const items = computed(() => list.data?.items || [])
const mostMoving = computed(() =>
  searching.value ? [] : list.data?.most_moving || [],
)
const hideImages = computed(() => Boolean(settings.value.hide_images))
const allowNegativeStock = computed(() =>
  Boolean(settings.value.allow_negative_stock),
)
const gridClass = computed(() =>
  props.dense
    ? '[grid-template-columns:repeat(auto-fill,minmax(9.5rem,1fr))]'
    : '[grid-template-columns:repeat(auto-fill,minmax(10.5rem,1fr))]',
)

const errorMessage = computed(() => {
  const m = list.error?.messages
  return (Array.isArray(m) ? m[0] : m) || 'Check your connection and try again.'
})

function load(refresh = false) {
  if (!profileName.value) return
  list.fetch({ refresh: refresh ? 1 : 0 })
}

// Search: debounced, so typing a code does not fire a request per keystroke.
const loadDebounced = debounce(() => load(false), 300)
watch(() => props.query, loadDebounced)
watch(profileName, (name) => name && load(false), { immediate: true })

// "Updated 3 min ago", ticking once a minute. The server reports the age in
// seconds, so browser and server clocks/timezones never need to agree.
const now = ref(Date.now())
const generatedAt = ref(null)
const ticker = setInterval(() => (now.value = Date.now()), 60 * 1000)
onUnmounted(() => clearInterval(ticker))

watch(
  () => list.data,
  (data) => {
    now.value = Date.now()
    generatedAt.value = data ? now.value - (data.age_seconds || 0) * 1000 : null
  },
)

const freshness = computed(() => {
  if (!generatedAt.value) return ''
  const minutes = Math.max(
    0,
    Math.floor((now.value - generatedAt.value) / 60000),
  )
  const age = minutes < 1 ? 'just now' : `${minutes} min ago`
  return `Updated ${age} · cached for ${settings.value.cache_minutes} min`
})

defineExpose({ load })
</script>
