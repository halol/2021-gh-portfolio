<template>
<div class="slice-embed">
  <div v-html="slice.primary.embed.html"></div>
</div>
</template>

<script>
export default {
  props: ['slice']
}
</script>

<style lang="scss">
.slice-embed {
  max-width: $screenshot-width;
  margin: 0 auto;
  iframe {
    width: 100%;
    min-height: 1000px;
    margin: 0 auto;
  }
}
</style>
