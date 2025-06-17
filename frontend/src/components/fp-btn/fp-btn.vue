<template>
  <button
    class="btn btn__text"
    :style="{
      color: textColor,
    }"
    :disabled
  >
    {{ title }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  title: string,
  textColor?: string,
  disabled?: boolean,
}

withDefaults(
  defineProps<Props>(), {
    textColor: '#fff',
  }
)
</script>