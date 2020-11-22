<template>
  <div class="slice-text">
    <prismic-rich-text :field="slice.primary.section_title" />
    <prismic-rich-text :field="slice.primary.text" />
  </div>
</template>

<script>
export default {
  props: ["slice"]
};
</script>

<style lang="scss"></style>
