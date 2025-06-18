<template>
  <div>
  <Menu
    as="div"
    class="
      relative
      inline-block
      text-left
    "
    :style="{
      color: textColor,
    }"
  >
    <MenuButton
      class="
        btn
        btn__text
      "
    :disabled
    >
      {{ menuTitle }}
    </MenuButton>

    <transition>
      <MenuItems
        class="
          absolute
          right-0
          mt-2
          w-56
          origin-top-right
          rounded-md
          bg-white
          shadow-lg
          ring-1
          ring-black/5
          focus:outline-hidden
        "
        >
        <div class="py-1">
          <MenuItem
            v-for="item in menuItemList"
            :key="item.id" 
            as="div"
            class="
              cursor-pointer
              px-4
              py-2
              text-sm
              lg:text-base
            hover:bg-gray-100
            "
            :class="activeSortOrder === item.sortOrder ? 'text-[var(--color-btn-active)]' : 'text-gray-900'"
            @click="emit('selectDropdown', item)"
          >
          {{ item.sortOrder }}
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>

  </div>
</template>

<script setup lang="ts">
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems
} from '@headlessui/vue';
import type {
  TFpDropdownMap,
  TMenuItemMap,
} from './fp-dropdown';

withDefaults(
  defineProps<TFpDropdownMap>(), {
    textColor: '#fff',
  }
)

const emit = defineEmits<{
  (e: 'selectDropdown', menuItemMap: TMenuItemMap): void
}>()
</script>
