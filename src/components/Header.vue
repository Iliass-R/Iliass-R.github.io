<template>
  <header
    class="absolute z-30 w-full flex items-center px-18 xl:px-0 xl:h-[90px]"
  >
    <div class="container mx-auto">
      <div
        class="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8 px-20"
      >
        <router-link to="/">
          <img src="/logo.svg" width="180" height="36" alt="" />
        </router-link>
        <Socials />
      </div>
    </div>
  </header>
</template>

<script setup>
import Socials from "./Socials.vue";
</script>
