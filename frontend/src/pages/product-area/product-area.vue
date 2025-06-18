<template>
  <div>
    <FilterMenu
      :disabled="isLoading"
      :is-filter-activ
      :active-sort-order
      @filter-per-price="isFilterActiv = !isFilterActiv; loadProductList()"
      @sort-product-data="sortProductData($event); loadProductList()"
      @changeView="compactView = !compactView"
    />

  <div class="p-2 grid gap-[10px] grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
    <ProductAreaItem
      v-for="productItem in productList"
      :key="productItem.id"
      class="border rounded-lg p-4 shadow bg-white flex flex-col gap-2 "
      :product="productItem"
      :show-only-bottle="compactView"
    />
  </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  shallowRef
} from 'vue';
import ProductAreaItem from '@/components/product-area-item/product-area-item.vue'
import type { TProductList } from './product-area';
import {
  getProductData,
  type TProductQuery
} from '@/api/productService.ts';
import FilterMenu from '@/components/filter-menu/filter-menu.vue'
import type { TMenuItemMap } from '@/components/fp-dropdown/fp-dropdown';

const compactView = shallowRef(false)
const activeSortOrder = shallowRef<TProductQuery["sortOrder"]>(undefined);
const isFilterActiv = shallowRef(false);

const productList = ref<TProductList>([])

const isLoading = shallowRef(false);
function loadProductList() {
  isLoading.value = true;

  getProductData({
    onlyCheap: isFilterActiv.value,
    sortOrder: activeSortOrder.value,
  })
    .then(data => {
      productList.value = data.data
    })
    .catch(err => {
      console.error(err)
    })
    .finally(() => {
      isLoading.value = false;
    });
}
loadProductList();

function sortProductData(menuItemMap: TMenuItemMap) {
  if (activeSortOrder.value === menuItemMap.sortOrder) {
    activeSortOrder.value = undefined;
    return;
  }
  activeSortOrder.value = menuItemMap.sortOrder
}
</script>
