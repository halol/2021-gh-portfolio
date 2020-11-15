<template>
<div class="slice-text">
  <prismic-rich-text :field="slice.primary.section_title" class="uid-section-title"/>
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
  max-width: $text-width;
  margin: 0 auto;
}
.uid-section-title {
  margin-bottom: .5em;
  @extend .h3;
}
</style>
