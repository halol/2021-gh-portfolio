<template>
  <div class="bg-black text-white flex flex-col">
    <div class="container mx-auto">
      <app-navigation></app-navigation>
    </div>

    <div class="container mx-auto">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  transition: "fade"
};
</script>

<style lang="scss">
a {
  @apply text-primary;
  @apply transition-all;
  &:hover {
    @apply text-secondary;
  }
}
a.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #00c58e;
}
</style>
