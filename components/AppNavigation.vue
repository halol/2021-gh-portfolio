<template>
  <div class="text-xl font-bold flex py-20 justify-between">
    <nuxt-link to="/">Grzegorz Hadala&mdash;Product Designer</nuxt-link>
    <nav class="flex flex-row space-x-8 2xl:sticky">
      <nuxt-link to="/projects" class="align-middle content-center"
        ><span>Projects</span></nuxt-link
      >
      <nuxt-link to="/about" class="align-middle"><span>About</span></nuxt-link>

      <a
        href="https://figma.com/@greghadala"
        class="button button-link"
        target="_blank"
        ><i class="ci-Figma mr-1"></i>
        <span class="md:hidden xl:hidden">Figma</span>
      </a>
      <a
        href="https://www.linkedin.com/in/grzegorzhadala/"
        target="_blank"
        class="button button-link"
      >
        <i class="ci-LinkedIn mr-1"></i>
        <span class="md:hidden xl:hidden">LinkedIn</span>
      </a>
      <a
        href="https://www.instagram.com/grzesiekmarekjurek/"
        target="_blank"
        class="button button-link"
        ><i class="ci-instagram mr-1"></i
        ><span class="md:hidden xl:hidden">Instagram</span></a
      >
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
