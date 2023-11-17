<template>
  <nav
    class="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen"
  >
    <div
      class="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full"
    >
      <router-link
        v-for="route in routes"
        :key="route.path"
        :to="route.path"
        class="relative flex items-center group hover:text-accent transition-all duration-300"
        :class="{ 'text-accent': isCurrentRoute(route.path) }"
      >
        <div
          v-if="isCurrentRoute(route.path)"
          class="absolute pr-14 right-0 hidden xl:group-hover:flex"
        >
          <div
            class="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]"
          >
            <div class="text-[12px] leading-none font-semibold capitalize">
              {{ route.name }}
            </div>
            <div
              class="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
            ></div>
          </div>
        </div>
        <div>
          <!-- icônes -->
          <component :is="route.icon" class="w-6 h-6 text-current" />
        </div>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  HomeIcon,
  UserIcon,
  ViewColumnsIcon,
  EnvelopeIcon,
} from "@heroicons/vue/24/solid";

const routes = ref([
  { path: "/", name: "Home", icon: HomeIcon },
  { path: "/about", name: "About", icon: UserIcon },
  { path: "/work", name: "Work", icon: ViewColumnsIcon },
  { path: "/contact", name: "Contact", icon: EnvelopeIcon },
]);

const currentRoute = useRoute();
const router = useRouter();

const isCurrentRoute = (path) => {
  if (path === "/") {
    return currentRoute.path === path;
  } else {
    return currentRoute.path.startsWith(path);
  }
};

onBeforeMount(() => {
  console.log("currentPath:", currentRoute.path);
});
</script>
