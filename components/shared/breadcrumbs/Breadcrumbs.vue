<script setup lang="ts">
const route = useRoute()

const names: Record<string, string> = {
  works: 'Works',
}

const dynamicNames: Record<string, string> = {
  works: 'Detail',
}

const breadcrumbs = computed(() => {
  const segments = route.path.split('/').filter(Boolean)
  let path = ''

  return [
    { path: '/', name: 'Home' },
    ...segments.map((segment, index) => {
      path += '/' + segment

      const parentSegment = segments[index - 1] || ''
      const isDynamic = route.params && Object.values(route.params).includes(segment)

      const name = isDynamic
        ? dynamicNames[parentSegment] || 'Элемент'
        : names[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

      return { path, name }
    })
  ]
})
</script>

<template>
  <nav v-if="breadcrumbs.length > 1">
    <template v-for="(breadcrumb, index) in breadcrumbs" :key="index">
      <NuxtLink
        v-if="index < breadcrumbs.length - 1"
        :to="breadcrumb.path"
        class="text-sm xl:text-base cursor-pointer hover:text-red"
      >
        {{ breadcrumb.name }}
      </NuxtLink>

      <span
        v-else
        class="text-sm xl:text-base"
      >
        {{ breadcrumb.name }}
      </span>

      <span v-if="index < breadcrumbs.length - 1"> / </span>
    </template>
  </nav>
</template>

