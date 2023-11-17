<template>
  <div class="mx-auto xl:mx-0 z-10">
    <router-link
      to="/work"
      class="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
    >
      <img
        src="/rounded-text.png"
        width="141"
        height="148"
        alt=""
        class="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
      />
      <ArrowRightIcon
        class="absolute text-4xl group-hover:translate-x-2 transition-all duration-300 h-10 w-10"
      />
    </router-link>
  </div>
</template>

<script setup>
import { ArrowRightIcon } from "@heroicons/vue/24/solid";
</script>
