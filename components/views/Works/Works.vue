<script setup lang="ts">
import type { ArtsMetadataResponseApi } from '@app-types/api/artsMetadataApi'
import { EArtMetadataCategoryName } from '@app-types/enums'
import { FilterSection } from './sections'
import type { ArtsResponseApi } from '@app-types/api/artsApi'
import { Form } from 'vee-validate'

const artMetadataCategoriesParam = Object.values(EArtMetadataCategoryName).join(',')

const activePage = ref(1)
const arts = ref<ArtsResponseApi | null>(null)
const isLoading = ref<boolean>(false)

const activeMetadataFilters = reactive({
  category: undefined,
  style: undefined,
  material: undefined,
  medium: undefined,
})

const pagesCount = computed(() => {
  const count = arts.value?.count ?? 0
  const limit = arts.value?.limit ?? 1

  return Math.ceil(count / limit)
})

const { data: artMetadataCategories } = await useApiFetch<ArtsMetadataResponseApi>(
  '/api/arts/metadata',
  {
    query: {
      category: artMetadataCategoriesParam,
    }
  }
)

const fetchArts = async () => {
  try {
    isLoading.value = true;

    const { data } = await useApiFetch<ArtsResponseApi>('/api/arts', {
      query: {
        page: activePage.value,
        limit: 8,
        ...activeMetadataFilters
      },
    })

    arts.value = data.value
  } catch (err) {
    console.log(err)
  } finally {
    isLoading.value = false;
  }
}

watch(activeMetadataFilters, () => {
  activePage.value = 1

  fetchArts()
}, {
  immediate: true
})

watch(activePage, () => {
  fetchArts()
})
</script>

<template>
  <div class="">
    <UiLoader v-if="isLoading" />

    <div v-show="!isLoading" class="mt-5 xl:mt-0 xl:grid xl:grid-cols-[1fr_5fr] xl:gap-10">
      <Form>
        <FilterSection
          v-if="artMetadataCategories"
          :filterCategories="artMetadataCategories"
          v-model="activeMetadataFilters"
        />
      </Form>

      <div>
        <div class="grid grid-cols-2 xl:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8">
          <SharedCardPreview v-if="arts?.results" v-for="item in arts.results" :item="item" />

          <p v-else class="text-center text-4xl font-bold col-span-full text-gray-500">
            There are no arts to display.
          </p>
        </div>

        <UiPagination
          v-if="arts?.results"
          class="text-center mt-8 xl:mt-[80px]"
          :pages-count="pagesCount"
          v-model:activePage="activePage"
        />
      </div>
    </div>
  </div>
</template>
