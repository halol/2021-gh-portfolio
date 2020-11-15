<template>
  <div class="home-page">
    <div class="container-flex">
      <h1 style="margin-bottom: 3em;">{{ $prismic.asText(document.title) }}</h1>
      <slices-wrapper :slices="document.body"></slices-wrapper>
      <nuxt-link to="/projects" class="button button-bright"
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
