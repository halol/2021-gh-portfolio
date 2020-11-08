<template>
  <h1 class="page-title animated fadeInDownBig">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  computed: {
    pageTitle() {
      let path = this.$route.path;
      let glitter = path.substring(1, path.length);
      return glitter;
    }
  }
};
</script>

<style lang="scss">
.page-title {
  user-select: none;
  //-webkit-text-stroke: 2px color($theme-light, "text-body");
  color: color($theme-light, "bg-body");
  transition: all 300ms ease;
  will-change: all;
  left: -2rem;
  top: -0.4rem;
  position: fixed;
  font-size: 20em;
  opacity: 1;
  z-index: -999;

  background: linear-gradient(135deg, #fce5cd 0%, $primary 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes animTitle {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }

  to {
    opacity: 0.2;
  }
}
</style>
