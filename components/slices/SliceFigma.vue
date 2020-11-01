<template>
<div class="slice-text">
  <div v-html="slice.primary.embed.html"></div>
</div>
</template>

<script>
export default {
  props: ['slice']
}
</script>

<style lang="scss">
.slice-text {
  max-width: 50em;
  margin: 0 auto;
}
</style>
