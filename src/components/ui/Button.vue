<script setup lang="ts">
interface Props {
  // title: string
  // borderColor?: string
  // backgroundColor?: string
}

defineProps<Props>()
</script>

<template>
  <div class="relative group w-fit">
    <button
      class="py-5 px-12 font-bold border-2 relative z-10 w-full h-full text-white bg-transparent border-red"
    >
      <slot />
    </button>

    <div
      class="absolute top-0 left-0 h-full w-0 bg-red transition-all duration-300 group-hover:w-full"
    ></div>
  </div>
</template>
