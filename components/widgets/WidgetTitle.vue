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
}
</script>

<style lang="scss">
.page-title {
  user-select: none;
  //-webkit-text-stroke: 2px color($theme-light, "text-body");
  color: color($theme-light, "bg-body");
  transition: all 300ms ease;
  will-change: all;
  left: -2rem;
  top: -.4rem;
  position: fixed;
  font-size: 20em;
  opacity: 1;
  z-index: -999;

  background: linear-gradient(135deg, #fce5cd 0%, $primary 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  // @include theme-dark {
  //   opacity: 1;
  //   //-webkit-text-stroke: 2px color($theme-dark, "text-body");
  //   color: color($theme-dark, "bg-body");
  //   // background: -webkit-linear-gradient($primary, $secondary);
  //   background: linear-gradient(135deg, #6B73FF 0%, #000DFF 100%);
  //   -webkit-background-clip: text;
  //   -webkit-text-fill-color: transparent;
  // }

  // animation-name: animTitle;
  // animation-duration: 2s;
  // animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  // animation-fill-mode: forwards;
}

@keyframes animTitle {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }

  to {
    opacity: .2;
  }
}
</style>
