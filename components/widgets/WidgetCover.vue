<template>
  <div class="mockup-floater">
    <template v-for="slice in slices">
      <template v-if="slice.slice_type === 'image_gallery'">
        <img
          v-for="(mockup, index) in slice.items"
          :key="index"
          :src="mockup.mockup_image.url"
          alt="Mockup"
          class="mockup-image animated fadeInRight"
          draggable="false"
        />
      </template>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    slices: {
      type: Array
    },
    limit: {
      type: Number,
      default: 3
    }
  }
};
</script>

<style lang="scss">
.mockup-floater {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  position: absolute;
  left: -3em;
  top: 2em;
  bottom: 0em;
  z-index: 3;
}

.mockup-image {
  display: block;
  position: relative;
  object-fit: scale-down;
  width: auto;
  height: 70vh;

  &:not(:last-child) {
    margin-right: 2em;
  }
}

@keyframes transitionImage {
  0% {
    opacity: 0;
    // transform?

    transform: translate(-2em, -2em);
  }

  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}

// Overrrides for SM size

@include sm {
  .mockup-floater {
    position: relative;
    left: auto;
    right: auto;
    bottom: auto;
    top: auto;
    padding: 1em;
  }
  .mockup-image {
    width: 100%;
    height: 50vh;
    // &:not(:first-child) {
    //   display: none;
    //   visibility: hidden;
    // }
  }
}
</style>
