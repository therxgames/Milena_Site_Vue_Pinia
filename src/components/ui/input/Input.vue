<script setup lang="ts">
import { useField } from 'vee-validate'
import { computed } from 'vue'
import { FormError } from '@ui'
import { InputEmits, InputProps } from './types'

const { type = 'text', required = true, placeholder, name } = defineProps<InputProps>()
const emit = defineEmits<InputEmits>()

const { value, errorMessage } = useField(() => name)

const placeholderText = computed(() => {
  return required ? `${placeholder} *` : placeholder
})
</script>

<template>
  <div class="relative">
    <FormError v-if="errorMessage" :message="errorMessage" />

    <input
      v-model="value"
      :type="type"
      class="text-gray-normal p-3 outline-0 w-full border-2"
      :class="!errorMessage ? 'border-gray-light' : 'border-red'"
      :placeholder="placeholderText"
      :name="name"
    />
  </div>
</template>

<style scoped lang="scss"></style>
