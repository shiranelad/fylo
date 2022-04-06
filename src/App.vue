<template>
  <section class="app-container container">
    <app-header />
    <router-view />
    <footer />
  </section>
</template>

<script>
import appHeader from "./components/app-header.vue";
import footer from "./components/footer.vue";
export default {
  name: "app",

  created() {},
  methods: {},
  components: {
    appHeader,
    footer,
  },
};
</script>
