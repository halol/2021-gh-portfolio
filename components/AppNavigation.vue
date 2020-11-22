<template>
  <div class="text-xl font-bold mx-auto container flex py-5 justify-between">
    <h1 class="">Grzegorz Hadala&mdash;Product Designer</h1>
    <nav class="flex flex-row space-x-5 ">
      <nuxt-link to="/" class="align-middle content-center"
        ><i class="ci-home_alt_outline"></i><span>Home</span></nuxt-link
      >
      <nuxt-link to="/projects" class="align-middle content-center"
        ><i class="ci-doughnut_chart mr-1"></i><span>Projects</span></nuxt-link
      >
      <nuxt-link to="/about" class="align-middle"
        ><i class="ci-user_circle mr-1"></i><span>About</span></nuxt-link
      >
      <div class="social">
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
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
