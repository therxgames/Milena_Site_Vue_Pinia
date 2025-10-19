<template>
  <div class="container flex flex-col min-h-[100vh] px-4 sm:px-0">
    <SectionsHeader />

    <main class="grow relative">
      <slot />
    </main>

    <SectionsFooter />
  </div>
</template>
