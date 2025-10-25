<script setup lang="ts">
import { useArtsStore } from '../../../stores/arts';

const navList = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Works',
    link: '/works',
  },
];

const router = useRouter()

const onLoginHandler = () => {
  router.push({ path: "/login" })
}

const onRegisterHandler = () => {
  router.push({ path: "/register" })
}
</script>

<template>
  <header>
    <div class="flex justify-between items-center select-none my-4 xl:my-10">
      <NuxtLink to="/" class="xl:text-4xl xl:leading-[36px] font-bold cursor-pointer">
        Milena.
      </NuxtLink>

      <div class="flex items-center xl:gap-x-6">
        <SharedNavigation :list="navList" />

        <!-- <div class="flex xl:gap-x-5">
          <UiButton size="md" @click="onLoginHandler">
            Login
          </UiButton>

          <UiButton size="md" @click="onRegisterHandler">
            Register
          </UiButton>
        </div> -->
      </div>
    </div>

    <SharedBreadcrumbs class="my-2 xl:my-8" />
  </header>
</template>
