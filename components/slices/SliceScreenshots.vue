<template>
  <div class="slice-screenshots -mx-10">
    <figure v-for="item in slice.items" :key="item.id" class="screenshot">
      <img
        class="screenshot_img"
        :src="item.screenshot_image.url"
        :alt="item.screenshot_caption.text"
        draggable="false"
      />
      <figcaption
        class="fig-caption text-center"
        v-show="item.screenshot_caption"
      >
        {{ $prismic.asText(item.screenshot_caption) }}
      </figcaption>
    </figure>
  </div>
</template>

<script>
// item.screenshot_image.url

// TODO: a moze tutaj dac widgeta i przekazywac $emit child > partent > child
export default {
  props: ["slice"],
  methods: {
    // openLightbox() {
    //   this.$emit('toggle-lightbox', true);
    //   console.log("Emitttinggggngngngn");
    // },
    openLightbox() {
      //this.$refs.lightbox.open();
    }
  }
};
</script>

<style lang="scss"></style>
