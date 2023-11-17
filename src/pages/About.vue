<template>
  <div
    class="min-h-screen bg-primary/30 py-32 text-center xl:text-left min-w-full overflow-y-hidden"
  >
    <Circles />
    <div
      class="container mx-auto h-full min-h-full flex flex-col items-center xl:flex-row gap-x-24"
    >
      <!-- texte -->
      <div class="flex-1 flex flex-col justify-center pt-6">
        <h2 class="h2">Bienvenue <span class="text-accent">.</span></h2>
        <br class="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0" />
        J'ai récemment terminé mon Bachelor en développement web et application.
        <br />
        Mon vif intérêt pour la technologie et le design m'a dirigé vers
        plusieurs facettes du développement, avec une focalisation particulière
        sur le développement web. <br />
        <br />
        J'ai un attrait pour l'OSINT ( Open Source Intelligence Technology ) et
        j'aimerais, dans le futur, m'orienter vers cette discipline
        <br />
        <br />
        Je me distingue grâce à mon aptitude à travailler de manière autonome,
        mon sens du détail et ma volonté de relever des défis. J'apprécie la
        résolution de problèmes et je suis orienté vers la réalisation de
        produits innovants. Mon expérience antérieure démontre ma capacité à
        respecter les bonnes pratiques de développement, que ce soit en matière
        de qualité du code et d'architecture propre. <br />
        <br />
        Vous trouverez ici des détails sur mes compétences et mes expériences.
      </div>
      <!-- infos -->
      <div class="flex flex-col w-full xl:max-w-[48%] h-[480px] pt-20">
        <div class="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          <div
            v-for="(item, itemIndex) in aboutData"
            :key="itemIndex"
            @click="setIndex(itemIndex)"
            :class="{
              'text-accent': index === itemIndex,
              'cursor-pointer': true,
              capitalize: true,
              'xl:text-lg': true,
              relative: true,
              'after:w-8': true,
              'after:h-[2px]': true,
              'after:bg-white': true,
              'after:absolute': true,
              'after:-bottom-1': true,
              'after:left-0': true,
              'after:w-[100%]': index === itemIndex,
              'after:bg-accent': index === itemIndex,
              'after:transition-all': index === itemIndex,
              'after:duration-300': index === itemIndex,
            }"
          >
            {{ item.title }}
          </div>
        </div>
        <div
          class="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start"
        >
          <div
            v-for="(item, itemIndex) in aboutData[index].info"
            :key="itemIndex"
            class="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/80"
          >
            <!-- titre -->
            <div class="font-semibold mb-2 md:mb-0">{{ item.title }}</div>
            <div class="hidden md:flex">-</div>
            <div>{{ item.stage }}</div>
            <div class="flex gap-x-4">
              <!-- icône -->
              <div
                v-for="(technology, technologyIndex) in item.technologies"
                :key="technologyIndex"
                class="text-2xl text-white/60"
              >
                <img :src="technology.icon" alt="technology icon" />
              </div>
            </div>
          </div>
          <div v-if="index === 1" class="mt-2 py-6 flex flex-col">
            <div class="flex flex-row">
              <div class="font-semibold mb-2 md-mb-0 text-white/80">
                Développeur FullStack en Alternance - HOC Job
              </div>
            </div>
            <ol class="text-white/60 font-normal">
              <li>
                - Optimisation de l'efficacité grâce à l'automatisation de
                tâches récurrentes avec Puppeteer
              </li>
              <li>
                - Conception d'une interface intuitive pour simplifier la
                gestion des documents et améliorer la traçabilité des signatures
              </li>
              <li>
                - Avec Vue.js & Ionic : Développement d'applications mobiles
                performantes & conviviales pour les clients & les entreprises
              </li>
              <li>
                - Acquisition de compétences en résolution de problèmes, gestion
                de projets & communication efficace.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Circles from "../components/Circles.vue";
import html5Icon from "../assets/icons/html.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import ionicIcon from "../assets/icons/ionic.svg";
import nodejsIcon from "../assets/icons/node.svg";
import tailwindCssIcon from "../assets/icons/tailwind.svg";
import vueJsIcon from "../assets/icons/vue.svg";
import firebaseIcon from "../assets/icons/firebase.svg";
import supabaseIcon from "../assets/icons/supabase.svg";
import figmaIcon from "../assets/icons/figma.svg";
import webflowIcon from "../assets/icons/webflow.svg";

const index = ref(0);

const aboutData = [
  {
    title: "Skills",
    info: [
      {
        title: "Développement Web",
        technologies: [
          { icon: html5Icon },
          { icon: javascriptIcon },
          { icon: nodejsIcon },
          { icon: vueJsIcon },
          { icon: tailwindCssIcon },
        ],
      },
      {
        title: "Développement Mobile",
        technologies: [{ icon: ionicIcon }],
      },
      {
        title: "Base de Données",
        technologies: [{ icon: firebaseIcon }, { icon: supabaseIcon }],
      },
      {
        title: "Design",
        technologies: [{ icon: figmaIcon }],
      },
      {
        title: "Outils de Développement",
        technologies: [{ icon: webflowIcon }],
      },
    ],
  },
  {
    title: "expériences",
  },
];

const setIndex = (itemIndex) => {
  index.value = itemIndex;
};
</script>
<style scoped></style>
