<template>
  <div class="header">
    <h1 class="nav-title">Grzegorz Hadala&mdash;Product Designer</h1>
    <nav class="nav">
      <nuxt-link to="/" class="button button-link"
        ><i class="ci-home_alt_outline"></i><span>Home</span></nuxt-link
      >
      <nuxt-link to="/projects" class="button button-link"
        ><i class="ci-doughnut_chart"></i><span>Projects</span></nuxt-link
      >
      <nuxt-link to="/art" class="button button-link"
        ><i class="ci-file_image"></i><span>Art</span></nuxt-link
      >
      <nuxt-link to="/blog" class="button button-link"
        ><i class="ci-text_align_left"></i><span>Blog</span></nuxt-link
      >
      <nuxt-link to="/about" class="button button-link"
        ><i class="ci-user_circle"></i><span>About</span></nuxt-link
      >
      <div class="social">
        <a
          href="https://figma.com/@greghadala
"
          class="button button-link"
          target="_blank"
          ><i class="ci-Figma"></i> <span>Figma</span></a
        >
        <a
          href="https://www.linkedin.com/in/grzegorzhadala/"
          target="_blank"
          class="button button-link"
          ><i class="ci-LinkedIn"></i><span>LinkedIn</span></a
        >
        <a
          href="https://www.instagram.com/grzesiekmarekjurek/"
          target="_blank"
          class="button button-link"
          ><i class="ci-instagram"></i><span>Instagram</span></a
        >
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
  @include sm {
    margin: 0;
  }
}
.nav-title {
  @extend .h5;
  @include sm {
    display: none;
  }
}
.nav {
  display: flex;

  @include sm {
    width: 100%;

    justify-content: space-around;
    z-index: 999;
    > * {
      margin: 0;
    }
    > .button {
      margin: 0;
      display: flex;
      justify-content: center;
      height: 64px;
      flex-grow: 1;
      border-radius: 0;
      &:focus,
      .nuxt-link-exact-active {
        background: $primary;
        color: white;
        > i {
          color: white;
        }
      }
      > i {
        margin: 0;
      }
      span {
        display: none;
      }
    }
  }
  .social {
    display: flex;
    .button > span {
      display: none;
    }
    @include sm {
      display: none;
    }
    > * {
      &:not(:last-child) {
        margin-right: 1em;
      }
    }

    @include xxl {
      margin-top: 4em;
      flex-direction: column;
      .button {
        span {
          display: inline;
        }
        &:not(:last-child) {
          margin-bottom: 1em;
          margin-right: 0;
        }
      }
    }
    @include sm {
    }
  }
  > * {
    &:not(:last-child) {
      margin-right: 2em;
    }
    @include sm {
      margin: 0;
      &:not(:last-child) {
        margin-right: 0em;
      }
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
