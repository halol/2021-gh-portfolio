<template>
  <div class="slice-promo mb-20">
    <!-- <h2 class="font-bold text-2xl">
      {{ $prismic.asText(slice.primary.promo_title) }}
    </h2> -->
    <div
      class="flex items-center"
      :class="{ 'flex-row-reverse': index % 2 == 1 }"
      v-for="(item, index) in slice.items"
      :key="'slide-' + index"
    >
      <div class="w-6/12 p-6 prose">
        <h3>
          {{ $prismic.asText(item.slide_title) }}
        </h3>
        <prismic-rich-text :field="item.slide_description" />
      </div>
      <div class="w-6/12">
        <img
          :src="item.slide_image.url"
          :alt="item.slide_image.alt"
          class="promo-image"
        />
      </div>
    </div>
    <div class="text-right pr-12 text-gray-600">
      <small
        >Illustrations by
        <a href="https://storytale.io/packages/denmark/" target="_blank"
          >Storytale.io</a
        ></small
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["slice"]
};
</script>

<style lang="scss"></style>
