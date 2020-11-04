<template>
<div class="mockups-cover">
  <template v-for="slice in slices">
    <template v-if="slice.slice_type === 'image_gallery'">
      <div class="mockup-div" v-for="(mockup, index) in slice.items" :key="index" :style="parseStyle(mockup.mockup_image.url)"></div>
    </template>
  </template>
</div>
</template>

<script>
// <img v-for="(mockup, index) in slice.items" :key="index" :src="mockup.mockup_image.url" alt="Mockup" class="mockups-cover-image" />
export default {
  props: ['slices'],
  methods: {
    parseStyle(url) {
      return `background-image: url(${url});`;
    }
  }
}
</script>

<style lang="scss">
.mockup-div {
  flex: 1;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom center;
  outline: 1px solid red;
}

.mockups-cover {
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  width: 100%;
  height: 110%;
  //max-height: 500px;
}

.mockups-cover-image {

  object-fit: contain;
  height: 100%;
  width: auto;

  &:not(:last-child) {
    margin-right: 2em;
  }
}
</style>
