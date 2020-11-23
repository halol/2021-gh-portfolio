<template>
  <div class="slice-promo mb-20">
    <div
      class="flex items-center flex-col md:flex-row"
      :class="{ 'md:flex-row-reverse': index % 2 == 1 }"
      v-for="(item, index) in slice.items"
      :key="'slide-' + index"
    >
      <div class="w-6/12 sm:w-full">
        <h3 class="text-2xl text-yellow-400 mb-4 font-semibold antialiased">
          {{ $prismic.asText(item.slide_title) }}
        </h3>
        <prismic-rich-text
          :field="item.slide_description"
          class="text-text w-3/4 leading-relaxed text-lg font-light"
        />
      </div>
      <div class="w-6/12 sm:w-full">
        <img
          :src="item.slide_image.url"
          :alt="item.slide_image.alt"
          class="transition-all transform hover:rotate-3 duration-300"
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
