<template>
  <div class="h-full bg-primary/30 py-36 flex items-center">
    <Circles />
    <div class="container mx-auto">
      <div class="flex flex-col xl:flex-row gap-x-8">
        <!-- text -->
        <div
          class="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0"
        >
          <h2 class="h2 xl:mt-12">
            Mes projets <span class="text-accent">.</span>
          </h2>
          <p class="mb-4 max-w-[400px] mx-auto lg:mx-0">
            Vous trouverez des informations sur différents projets que j'ai pu
            réaliser en cliquant dessus. Vous serez redirigés vers une page
            Notion.
          </p>
        </div>

        <!-- slider -->
        <div class="w-full xl:max-w-[60%]">
          <WorkSlider />
        </div>
      </div>
    </div>
    <Bulb />
  </div>
</template>

<script setup>
import WorkSlider from "../components/WorkSlider.vue";
import Bulb from "../components/Bulb.vue";
import Circles from "../components/Circles.vue";

// Note: If you need to import any other dependencies or data, you can add them here.
</script>
