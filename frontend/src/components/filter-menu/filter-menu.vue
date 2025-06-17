<template>
  <div
    class="
      flex
      h-[70px]
      justify-center
      items-center
      gap-[12px]
      bg-(--color-nav-bg-mobile)
      lg:bg-(--color-nav-bg-desktop)
      lg:gap-[30px]
    "
  >
    <FpDropdown
      :disabled
      :menu-title="'Sort'"
      :menu-item-list="sortProductList"
      @select-dropdown="emit('sortProductData', $event)"
    />
    <FpBtn
      :disabled
      :title="'View'"
      @click="emit('changeView')"
    />
    <FpBtn
      :disabled
      :title="'Filter'"
      :text-color="isFilterActiv ? 'var(--color-btn-active)' : undefined"
      @click="emit('filterPerPrice')"
    />
  </div>
</template>

<script setup lang="ts">
import FpBtn from '@/components/fp-btn/fp-btn.vue'
import FpDropdown from '@/components/fp-dropdown/fp-dropdown.vue'
import type { TMenuItemMap } from '@/components/fp-dropdown/fp-dropdown.ts';

defineProps<{
  isFilterActiv?: boolean
  disabled?: boolean
}>()

const emit = defineEmits<{
  (e: 'changeView',): void,
  (e: 'filterPerPrice',): void,
  (e: 'sortProductData', menuItemMap: TMenuItemMap): void,
}>()

const sortProductList: TMenuItemMap[] = [
  {
    id: 1,
    sortOrder: 'ascending',
  },
  {
    id: 2,
    sortOrder: 'descending',
  },
];
</script>