<template>
  <div class="header">
    <h1 class="nav-title">Grzegorz Hadala&mdash;Product Designer</h1>
    <nav class="nav">
      <nuxt-link to="/" class="button button-link">Home</nuxt-link>
      <nuxt-link to="/projects" class="button button-link">Projects</nuxt-link>
      <nuxt-link to="/art" class="button button-link">Art</nuxt-link>
      <nuxt-link to="/blog" class="button button-link">Blog</nuxt-link>
      <nuxt-link to="/about" class="button button-link">About</nuxt-link>
      <div class="social">
        <a href="" class="button button-link"><i class="ci-Figma"></i></a>
        <a href="" class="button button-link"><i class="ci-LinkedIn"></i></a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1% 5%;
  @include xxl {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0;
  }
}
.nav-title {
  @extend .h5;
}
.nav {
  display: flex;
  .social {
    display: flex;
    > {
      :not(:last-child) {
        margin-right: 2em;
      }
    }
  }
  > {
    :not(:last-child) {
      margin-right: 2em;
    }
  }
  @include xxl {
    margin-top: 3em;
    flex-direction: column;
    > {
      :not(:last-child) {
        margin-bottom: 1em;
      }
    }
  }
}
</style>
