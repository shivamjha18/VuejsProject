<template>
  <Navbar />
  <div class="page-wrap">
    <router-view></router-view>
  </div>
  <FooterPage />
</template>

<script>
import Navbar from "@/components/NavbarPage.vue";
import FooterPage from "@/components/FooterPage.vue";
export default {
  name: "App",
  components: {
    Navbar,
    FooterPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
