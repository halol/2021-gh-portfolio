<template>
  <div>
    <h1 class="text-6xl leading-tight my-20 max-w-6xl">
      {{ $prismic.asText(document.title) }}
    </h1>
    <div>
      <h2 class="uppercase text-xs tracking-relaxed font-semibold text-primary">
        Worked with
      </h2>
      <div class="flex flex-row space-x-10 items-center">
        <img
          class="h-16 opacity-50"
          src="../static/brands/logo-adyen.svg"
          alt="Adyen"
          draggable="false"
        />
        <img
          class="h-16 opacity-50"
          src="../static/brands/logo-canon.svg"
          alt="Adyen"
          draggable="false"
        />
        <img
          class="h-16 opacity-50"
          src="../static/brands/logo-payu.svg"
          alt="Adyen"
          draggable="false"
        />
        <img
          class="h-16 opacity-50"
          src="../static/brands/logo-allegro.svg"
          alt="Adyen"
          draggable="false"
        />
        <img
          class="h-16 opacity-50"
          src="../static/brands/logo-orsay.svg"
          alt="Adyen"
          draggable="false"
        />
      </div>
    </div>
    <slices-wrapper :slices="document.body"></slices-wrapper>

    <div class="mx-auto text-center py-24">
      <nuxt-link
        to="/projects"
        class="mx-auto px-6 py-4 rounded-md font-semibold bg-primary text-white hover:text-white hover:bg-teritary"
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
