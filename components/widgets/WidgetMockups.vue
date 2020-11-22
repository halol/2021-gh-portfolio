<template>
  <div class="mockups-cover">
    <template v-for="slice in slices">
      <template v-if="slice.slice_type === 'image_gallery'">
        <div
          class="mockup-div"
          v-for="(mockup, index) in slice.items.slice(0, limit)"
          :key="index"
          :style="parseStyle(mockup.mockup_image.url)"
        ></div>
      </template>
    </template>
  </div>
</template>

<script>
// <img v-for="(mockup, index) in slice.items" :key="index" :src="mockup.mockup_image.url" alt="Mockup" class="mockups-cover-image" />
export default {
  props: {
    slices: {
      type: Object
    },
    limit: {
      type: Number,
      default: 3
    }
  },
  methods: {
    parseStyle(url) {
      return `background-image: url(${url});`;
    }
  }
};
</script>

<style lang="scss"></style>
