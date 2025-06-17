<template>
  <div
    v-if="!showOnlyBottle"
    class="bg-white rounded-xl p-4 shadow flex flex-row gap-4 w-full h-[120px]"
  >
    <img
      :src="product.articles[0].image"
      :alt="product.name"
      class="w-20 h-20 object-contain"
    />
    <div class="flex flex-col justify-between flex-1 overflow-hidden">
      <h2 class="text-sm font-semibold break-words leading-tight">
        {{ product.name }}
      </h2>
      <p class="text-xs text-gray-700">{{ product.articles[0].price }}€</p>
      <p class="text-xs text-gray-500 truncate">{{ product.articles[0].shortDescription }}</p>
    </div>
  </div>

  <div
    v-else
    class="flex justify-center items-center w-full h-[120px]"
  >
    <img
      :src="product.articles[0].image"
      :alt="product.name"
      class="h-full object-contain"
    />
  </div>
</template>

<script setup lang="ts">
import type { Product } from './product-area'

withDefaults(
  defineProps<{
    product: Product,
    showOnlyBottle?: boolean,
  }>(),
  {
    showOnlyBottle: false,
  }
)
</script>
