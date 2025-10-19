<script setup lang="ts">
import { useField } from 'vee-validate'
import { computed, useAttrs } from 'vue'
import { FormError } from '@ui'
import { TextareaEmits, TextareaProps } from './types'

const attrs = useAttrs()

const { required = true, placeholder, name } = defineProps<TextareaProps>()
const emit = defineEmits<TextareaEmits>()

const { value, errorMessage } = useField<string>(() => name)

const placeholderText = computed(() => {
  return required ? `${placeholder} *` : placeholder
})
</script>

<template>
  <div class="relative">
    <FormError v-if="errorMessage" :message="errorMessage" />

    <textarea
      v-model="value"
      class="text-gray-normal p-3 outline-0 w-full border-2 resize-none"
      :class="!errorMessage ? 'border-gray-light' : 'border-red'"
      :placeholder="placeholderText"
      :name="name"
      v-bind="attrs"
    />
  </div>
</template>

<style scoped lang="scss"></style>
