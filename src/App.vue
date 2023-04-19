<script setup>
import { RouterView } from "vue-router";
import Menu from "./components/Menu.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <main>
    <Menu></Menu>
    <RouterView />
    <Footer></Footer>
  </main>
</template>

<style lang="scss" scoped>
</style>
