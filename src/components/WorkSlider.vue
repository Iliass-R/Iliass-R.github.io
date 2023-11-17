<template>
  <div class="h-[480px]">
    <div
      v-for="(slide, index) in workSlider.slides"
      :key="index"
      class="grid grid-cols-2 grid-rows-2 gap-4 px-4"
    >
      <a
        v-for="(project, projectIndex) in slide.projects"
        :key="projectIndex"
        :href="project.link"
        class="relative rounded-lg overflow-hidden flex items-center justify-center group"
      >
        <!-- image -->
        <img
          :src="project.path"
          alt=""
          class="w-full h-full object-cover cursor-pointer"
        />
        <!-- gradient -->
        <div
          class="absolute inset-0 bg-gradient-to-l from-transparent via-[#9038e88e] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
        ></div>
        <!-- titre -->
        <div
          class="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300"
        >
          <div class="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
            <!-- titre part 1 -->
            <div class="delay-100">PLUS</div>
            <!-- titre part 2 -->
            <div
              class="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150"
            >
              D'INFOS
            </div>
            <!-- icône -->
            <div
              class="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200"
            >
              <ArrowRightIcon class="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ArrowRightIcon } from "@heroicons/vue/24/solid";

const workSlider = ref({
  slides: [
    {
      projects: [
        {
          title: "Projet 1",
          path: "/defile-sauvage.png",
          link: "https://iliass-rami.notion.site/1st-Savage-Avenue-Documentation-3f96480ab115428490e9e173ac2ebd57?pvs=4",
        },
        {
          title: "Projet 2",
          path: "/crm-nk.jpg",
          link: "https://iliass-rami.notion.site/CRM-NK-Documentation-c656827bd2a74461b269358e3964c9b3",
        },
        {
          title: "Projet 3",
          path: "/portefolio.png",
          link: "https://iliass-rami.notion.site/Portefolio-Documentation-b403bca0ff1b48d298817c32aedca346?pvs=4",
        },
        {
          title: "Projet 4",
          path: "/kiwine.jpg",
          link: "https://iliass-rami.notion.site/Kiwine-Documentation-3e184175d95c4c2689a2d10e6aa0820d?pvs=4",
        },
      ],
    },
  ],
});
</script>
