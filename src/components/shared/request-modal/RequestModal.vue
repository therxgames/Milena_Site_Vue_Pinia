<script setup lang="ts">
import * as yup from 'yup'
import { Form, useForm } from 'vee-validate'
import { Select, Button, Input, Textarea } from '@ui'
import { RequestModalEmits, RequestModalProps } from './types'

const props = defineProps<RequestModalProps>()
const emit = defineEmits<RequestModalEmits>()

const schema = yup.object({
  email: yup.string().required('Email is required').email('Invalid email'),
  full_name: yup.string().required('Full Name is required'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required'),
})

const options = [
  { title: 'General Inquiry', value: 1 },
  { title: 'Feedback', value: 2 },
  { title: 'Collaboration', value: 3 },
  { title: 'Support Request', value: 4 },
  { title: 'Other', value: 5 },
]

function onSubmit(values) {
  console.log(values)
}
</script>

<template>
  <div class="w-[600px] bg-black p-14">
    <div class="text-4xl font-bold leading-[36px]">Contact Me</div>

    <Form @submit="onSubmit" :validation-schema="schema" class="flex flex-col gap-y-8 mt-10">
      <Input placeholder="Full Name" name="full_name" />
      <Input placeholder="Email" name="email" />
      <Select name="subject" title="Subject" :options="options" size="lg" />
      <Textarea placeholder="Your message" name="message" v-bind:rows="8" />

      <div class="flex justify-center">
        <Button type="submit">Send Message</Button>
      </div>
    </Form>
  </div>
</template>

<style scoped lang="scss"></style>
