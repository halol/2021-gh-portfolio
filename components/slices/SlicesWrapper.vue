<template>
  <div class="slices">
    <section
      v-for="(slice, index) in slices"
      :key="'slice-' + index"
      :role="slice.slice_type"
      class="slice-section"
    >
      <template
        name="image_gallery"
        v-if="slice.slice_type === 'image_gallery'"
      >
        <slice-mockups
          :slice="slice"
          :color="color"
          v-show="false"
        ></slice-mockups>
      </template>
      <template name="text" v-if="slice.slice_type === 'text'">
        <slice-text :slice="slice"></slice-text>
      </template>
      <template name="figma" v-if="slice.slice_type === 'figma'">
        <slice-figma :slice="slice"></slice-figma>
      </template>
      <template name="project_goal" v-if="slice.slice_type === 'project_goal'">
        project_goal
      </template>
      <template name="screenshots" v-if="slice.slice_type === 'screenshots'">
        <slice-screenshots :slice="slice"></slice-screenshots>
      </template>
      <template name="quote" v-if="slice.slice_type === 'quote'">
        <slice-quote :slice="slice"></slice-quote>
      </template>
      <template name="promo" v-if="slice.slice_type === 'selfpromo'">
        <slice-promo-slide :slice="slice"></slice-promo-slide>
      </template>
      <template name="promo" v-if="slice.slice_type === 'brands'">
        <slice-brands :slice="slice"></slice-brands>
      </template>
    </section>
  </div>
</template>

<script>
export default {
  props: ["slices", "color"]
};
</script>

<style lang="scss">
section.slice-section {
  &:not(:last-child) {
    margin-bottom: 2em;
  }
}
</style>
