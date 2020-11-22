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

<style lang="scss"></style>
