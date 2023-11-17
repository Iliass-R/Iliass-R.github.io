<template>
  <div class="min-h-full bg-primary/60">
    <div
      class="w-full h-screen bg-gradient-to-r from-primary/10 via-black/30 to-black/10"
    >
      <div
        class="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto"
      >
        <h1 class="h1" v-if="showTitle" :class="titleClasse">
          Développeur Fullstack <br />
          Passionné par <span class="text-accent">l'UX/UI</span>
        </h1>
        <p
          classs="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          v-if="showSubtitle"
          :class="subtitleClasses"
        >
          Développeur Fullstack et Amateur d'UX/UI : Réalisons l'Harmonie
          Numérique
        </p>
        <div class="flex justify-center xl:hidden relative" v-if="showBtn">
          <ProjectsBtn />
        </div>
        <div class="hidden xl:flex" v-if="showBtn">
          <ProjectsBtn />
        </div>
      </div>
    </div>
    <div class="w-[1200px] h-full absolute right-0 bottom-0">
      <div
        class="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
      ></div>
      <ParticlesContainer />
      <div
        class="w-full h-full max-w-[737px] max-h-[678px] absolute lg:right-[8%]"
      >
        <Avatar />
      </div>
    </div>
  </div>
</template>

<script setup>
import ParticlesContainer from "../components/ParticlesContainer.vue";
import ProjectsBtn from "../components/ProjectsBtn.vue";
import Avatar from "../components/Avatar.vue";
import { ref, onMounted, computed } from "vue";

const showTitle = ref(false);
const showSubtitle = ref(false);
const showBtn = ref(false);

const titleClasse = computed(() => ({
  h1: true,
  show: showTitle.value,
}));

const subtitleClasses = computed(() => ({
  // Add your subtitle classes here
  "max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16": true,
  show: showSubtitle.value,
}));

onMounted(() => {
  setTimeout(() => (showTitle.value = true), 200);
  setTimeout(() => (showSubtitle.value = true), 300);
  setTimeout(() => (showBtn.value = true), 400);
});
</script>

<style scoped>
.show {
  opacity: 1;
  transform: translate(0, 0);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}
</style>
