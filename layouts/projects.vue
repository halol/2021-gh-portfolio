<template>
  <div class="default-layout container">
    <div class="navigation">
      <app-navigation></app-navigation>
    </div>
    <div class="content">
      <Nuxt />
    </div>
    <div class="footer">
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import "~/components/AppNavigation";
export default {};
</script>

<style lang="scss"></style>
