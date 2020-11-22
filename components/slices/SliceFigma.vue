<template>
  <div class="slice-embed">
    <div v-html="slice.primary.embed.html"></div>
  </div>
</template>

<script>
export default {
  props: ["slice"]
};
</script>

<style lang="scss"></style>
