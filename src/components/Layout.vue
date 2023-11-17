<template>
  <div class="page bg-site text-white bg-cover font-sora relative">
    <TopLeftImg />
    <Nav />
    <Header />
    <slot></slot>
  </div>
</template>

<script setup>
import TopLeftImg from "./TopLeftImg.vue";
import Nav from "./Nav.vue";
import Header from "./Header.vue";
</script>
