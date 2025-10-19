<script setup lang="ts">
import { useId } from 'vue'
import { useField } from 'vee-validate'
import type { Option } from '../select/types'
import type { MultiCheckboxEmits, MultiCheckboxProps } from './types'

const { name, options } = defineProps<MultiCheckboxProps>()
const emit = defineEmits<MultiCheckboxEmits>()

const id = useId()

const { value: checkboxValues, setValue } = useField<(string | number)[]>(() => name)

const toggleCheckbox = (option: Option) => {
  const currentValue = checkboxValues.value || []

  const newValues = currentValue.includes(option.value)
    ? currentValue.filter((val) => val !== option.value)
    : [...currentValue, option.value]

  setValue(newValues)
  emit('change', newValues)
}
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <div v-for="option in options" :key="option.value">
      <input
        :id="`${id}_${option.value}`"
        type="checkbox"
        :value="option.value"
        @change="toggleCheckbox(option)"
      />

      <label :for="`${id}_${option.value}`">{{ option.title }}</label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

input + label {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

input + label::before {
  content: '';
  width: 15px;
  height: 15px;
  border: 1px solid theme('colors.white');
  background-position: center center;
  background-size: 75% 75%;
  background-repeat: no-repeat;
}

input:checked + label::before {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}
</style>
