<template>
<div class="slice-text">
  <prismic-rich-text :field="slice.primary.text" />
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
