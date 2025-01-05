<script setup lang="ts">
import { provide, ref } from 'vue'
import { useField } from 'vee-validate'
import { DropdownList } from './DropdownList'
import { DropdownTitle } from './DropdownTitle'
import { FormError } from '@ui'
import { Option, SelectEmits, SelectProps } from './types'

const { required = true, name, size } = defineProps<SelectProps>()

const emit = defineEmits<SelectEmits>()

const { value: selectValue, errorMessage } = useField(() => name)

provide('size', size)

const isOpen = ref(false)
const selectTitle = ref<string>('')

const selectOption = (option: Option) => {
  selectValue.value = option.value
  selectTitle.value = option.title

  emit('change', option.value)

  console.log('selectValue', selectValue.value)

  isOpen.value = false
}

const toggleDropdown = () => (isOpen.value = !isOpen.value)
</script>

<template>
  <div class="relative" tabindex="1" @blur="isOpen = false">
    <input type="hidden" :name="name" :value="selectValue" />

    <FormError v-if="errorMessage" :message="errorMessage" />

    <DropdownTitle
      :title="selectTitle || title"
      :is-open="isOpen"
      :is-selected="!!selectValue"
      :is-required="required && !selectTitle"
      :is-error="!!errorMessage"
      @toggle="toggleDropdown"
    />

    <DropdownList
      v-if="isOpen"
      :options="options"
      :active-value="!!selectValue ? selectValue : null"
      @change="selectOption"
    />
  </div>
</template>

<style scoped lang="scss"></style>
