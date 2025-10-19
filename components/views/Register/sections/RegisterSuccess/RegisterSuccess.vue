<script setup lang="ts">
</script>

<template>
  <UiBox class="mt-10">
    <UiTypography component="h2" class="font-bold leading-7">
      You’ve successfully registered! <br/>
      You can now log in and start using your account. <br/>
      Welcome to my community!
    </UiTypography>

    <UiBox class="flex justify-center mt-7">
      <UiButton>
        <NuxtLink to="/login">Login</NuxtLink>
      </UiButton>
    </UiBox>
  </UiBox>
</template>
