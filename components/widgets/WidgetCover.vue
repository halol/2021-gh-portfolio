<template>
  <div class="flex flex-row flex-no-wrap">
    <template v-for="slice in slices">
      <template v-if="slice.slice_type === 'image_gallery'">
        <img
          v-for="(mockup, index) in slice.items.slice(0, 4)"
          :key="index"
          :src="mockup.mockup_image.url"
          alt="Mockup"
          class="mr-4 h-card object-scale-down block w-auto"
          :class="{
            'delay-100': index === 1,
            'delay-300': index === 2,
            'delay-500': index === 3
          }"
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

<style lang="scss"></style>
