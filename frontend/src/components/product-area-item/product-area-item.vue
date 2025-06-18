<template>
  <div
    class="flex w-full h-[120px]"
    :class="[
      !showOnlyBottle
      ? 'bg-white rounded-xl p-4 shadow flex-row gap-4'
      : 'justify-center items-center']"
  >
    <template v-if="!showOnlyBottle">
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
    </template>

    <template v-else>
      <img
        :src="product.articles[0].image"
        :alt="product.name"
        class="h-full object-contain"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import type { TProduct } from '@/pages/product-area/product-area.ts'

withDefaults(
  defineProps<{
    product: TProduct,
    showOnlyBottle?: boolean,
  }>(),
  {
    showOnlyBottle: false,
  }
)
</script>
