<template>
  <div class="project-title">
    <div class="text-xl" role="project-title">
      <div class="text-white text-2xl">
        {{ $prismic.asText(company) }}
      </div>
      <div class="text-white text-opacity-75 mb-2">
        {{ year.substring(0, 4) }}
      </div>
      <h1
        class="text-5xl text-opacity-75 tracking-tight leading-tight max-w-4xl"
      >
        {{ $prismic.asText(info) }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ["company", "year", "info"]
};
</script>

<style></style>
