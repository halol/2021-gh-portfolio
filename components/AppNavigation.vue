<template>
<div class="header" :class="getType">
  <h1 class="nav-title">Grzegorz Hadala–Product designer</h1>
  <nav class="nav">
    <nuxt-link to="/" class="button button-link">Home</nuxt-link>
    <nuxt-link to="/projects" class="button button-link">Projects</nuxt-link>
    <nuxt-link to="/about" class="button button-link">About</nuxt-link>
  </nav>
</div>
</template>

<script>
export default {
  // Import menu items?
  props: ['type'],
  computed: {
    getType() {
      if (this.type === null) {
        return;
      } else if (this.type === 'vertical') {
        return 'nav-vertical';
      }
    }
  }
}
</script>

<style lang="scss">
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 999;

  &.nav-vertical {
    flex-direction: column;
    padding: padding('large');

    .nav {
      flex-direction: column;

      >* {
        &:not(:last-child) {
          margin-bottom: padding('small');
        }
      }
    }
  }

  .nav {
    display: flex;

    >* {
      &:not(:last-child) {
        margin-right: 32px;
      }
    }
  }

  .nav-title {
    margin: 0;
    font-size: 1em;
    padding: 0;
    line-height: 1.75em;

  }
}
</style>
