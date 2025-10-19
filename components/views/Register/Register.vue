<script setup lang="ts">
import { RegisterForm } from './sections';
import * as yup from 'yup'
import { RegisterSuccess } from './sections/RegisterSuccess';

export interface RegisterData {
  email: string,
  password: string
}

const authStore = useAuthStore()

const registerSchema = yup.object({
  email: yup.string().required('Email is required').email('Invalid email'),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
})

const onSubmit = async (data: RegisterData) => {
  await authStore.signUp(data.email, data.password)
}
</script>

<template>
  <UiBox class="flex items-center justify-center pt-[50px]">
    <UiBox class="relative w-[700px] flex flex-col justify-center p-12 border-2 border-red">
      <UiTypography component="h2" class="text-2xl text-left xl:text-4xl font-bold">Register</UiTypography>

      <UiLoader v-if="authStore.isLoading" class="block" />

      <RegisterForm
        v-if="!authStore.isRegistered"
        :schema="registerSchema"
        :is-loading="authStore.isLoading"
        :error="authStore.error"
        :onSubmit="onSubmit"
      />

      <RegisterSuccess
        v-if="authStore.isRegistered"
      />
    </UiBox>
  </UiBox>
</template>
