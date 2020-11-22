<template>
  <div class="slice-brands p-10 bg-gray-200 rounded-xl mb-10">
    <h2 class="text-lg font-bold">
      {{ $prismic.asText(slice.primary.brands_title) }}
    </h2>

    <div class="flex justify-between items-center">
      <div
        class="logo"
        v-for="(logo, index) in slice.items"
        :key="'logo-' + index"
      >
        <img
          :src="logo.company_logo.url"
          :alt="logo.company_logo.alt"
          class="w-24"
          style="filter: grayscale(1)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["slice"]
};
</script>

<style lang="scss"></style>
