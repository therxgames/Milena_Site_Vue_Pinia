<script setup lang="ts">
import { Form } from 'vee-validate'
import type { RegisterFormEmits, RegisterFormProps } from './types'

const props = defineProps<RegisterFormProps>()
const emit = defineEmits<RegisterFormEmits>()
</script>

<template>
  <Form
    @submit="onSubmit"
    :validation-schema="schema"
    :validate-on-blur="true"
    class="flex flex-col gap-y-8 mt-10 transition-opacity duration-300"
    :class="{ 'opacity-0 pointer-events-none': isLoading }"
  >
    <UiInput name="email" placeholder="Email" />
    <UiInput name="password" placeholder="Password" type="password" />

    <UiTypography v-if="error" class="text-red text-lg font-bold">
      {{ error }}
    </UiTypography>

    <UiBox class="flex justify-center">
      <UiButton type="submit">Register</UiButton>
    </UiBox>
  </Form>
</template>
