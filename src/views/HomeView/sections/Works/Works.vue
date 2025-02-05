<script setup lang="ts">
import { useArtStore } from '@stores'
import { WorksEmits, WorksProps } from './types'
import { WorkList } from './WorkList'
import { onMounted } from 'vue'
import { Title } from '@ui';

const props = defineProps<WorksProps>()
const emit = defineEmits<WorksEmits>()

const artStore = useArtStore()

onMounted(() => {
  artStore.getAllArts({
    limit: 5
  })
})
</script>

<template>
  <div class="pt-5 xl:pt-[150px]">
    <div class="title_box relative">
      <Title class="xl:pt-5">Works</Title>

      <p class="pt-2.5 text-xs xl:text-xl font-bold uppercase text-red tracking-widest">Things we've made</p>
    </div>
  </div>

  <WorkList :works="artStore.arts" />
</template>

<style scoped lang="scss">
.title_box::before {
  display: none;
}

@screen xl {
  .title_box::before {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 20%;
    height: 3px;
    background-color: theme('colors.red');
  }
}
</style>
