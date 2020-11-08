<template>
  <div class="slice-screenshots">
    <figure v-for="item in slice.items" :key="item.id" class="card screenshot">
      <img
        class="screenshot_img"
        :src="item.screenshot_image.url"
        :alt="item.screenshot_caption.text"
        draggable="false"
      />
      <figcaption class="fig-caption" v-show="item.screenshot_caption">
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

<style lang="scss">
.slice-screenshots {
  // max-width: 60%;
  // margin: 0 auto;
}

.screenshot {
  overflow: hidden;
  position: relative;
  padding: 24px;
  @include sm {
    padding: 0.5em;
  }
}

.button-expand {
  position: absolute;
  top: 1em;
  right: 1em;
}

.screenshot_img {
  width: 100%;
  display: block;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}

.screenshot {
  &:not(:last-child) {
    margin-bottom: 3em;
    @include sm {
      margin-bottom: 1em;
    }
  }

  background: $screenshot-bg;
}

.fig-caption {
  text-align: center;
  color: color($theme-light, "muted");

  @include theme-dark {
    bcolor: color($theme-dark, "muted");
  }
}
</style>
