<template>
  <div>
    <FilterMenu
      :disabled="isLoading"
      :is-filter-activ="isFilterActiv"
      @filter-per-price="isFilterActiv = !isFilterActiv; loadProductList()"
      @sort-product-data="sortProductData($event); loadProductList()"
      @changeView="showOnlyBottle = !showOnlyBottle"
    />

  <div class="p-2 grid gap-[10px] grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
    <ProductAreaItem
      v-for="productItem in productList"
      :key="productItem.id"
      class="border rounded-lg p-4 shadow bg-white flex flex-col gap-2 "
      :product="productItem"
      :show-only-bottle="showOnlyBottle"
    />
  </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  shallowRef
} from 'vue';
import ProductAreaItem from '@/pages/product-area/product-area-item.vue'
import type { ProductList } from './product-area';
import {
  getProductData,
  type ProductQuery
} from '@/api/productService.ts';
import FilterMenu from '@/components/filter-menu/filter-menu.vue'
import type { TMenuItemMap } from '@/components/fp-dropdown/fp-dropdown';

const showOnlyBottle = shallowRef(false)
const activeSortOrder = shallowRef<ProductQuery["sortOrder"]>(undefined);
const isFilterActiv = shallowRef(false);

const productList = ref<ProductList>([])

const isLoading = shallowRef(false);
function loadProductList() {
  isLoading.value = true;

  let productQuery: ProductQuery = {
    onlyCheap: isFilterActiv.value,
  };


  if (activeSortOrder.value !== undefined) {
    productQuery.sortOrder = activeSortOrder.value;
  }

  getProductData(productQuery)
    .then(data => {
      productList.value = data
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
