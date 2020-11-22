<template>
  <div class="home-page">
    <h1 class="text-6xl leading-tight my-20">
      {{ $prismic.asText(document.title) }}
    </h1>
    <slices-wrapper :slices="document.body"></slices-wrapper>
    <div class="mx-auto text-center py-10">
      <nuxt-link
        to="/projects"
        class="mx-auto px-6 py-4 rounded-md font-semibold bg-blue-700 text-white"
        >Check out my projects</nuxt-link
      >
    </div>
  </div>
</template>

<script>
import "axios";

/* https://prismic.io/docs/vuejs/getting-started/prismic-nuxt */

export default {
  async asyncData({ $prismic, error }) {
    try {
      const document = (await $prismic.api.getSingle("homepage")).data;
      return {
        document
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>

<style lang="scss"></style>
