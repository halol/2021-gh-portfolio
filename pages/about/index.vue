<template>
  <div class="">
    <img
      :src="document.my_photo.url"
      alt="Greg"
      class="w-48 h-48 overflow-hidden object-cover rounded-full"
    />
    <h1 class="text-6xl leading-tight mb-20">
      {{ $prismic.asText(document.intro) }}
    </h1>
    <div class="prose mx-auto">
      <div v-for="(p, index) in document.story" :key="index">
        <h2
          :key="index"
          v-if="p.type === 'heading2'"
          class="text-2xl font-bold mb-4"
        >
          {{ p.text }}
        </h2>
        <p :key="index" v-if="p.type === 'paragraph'" class="mb-3">
          {{ p.text }}
        </p>
      </div>

      <widget-work-history></widget-work-history>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, error }) {
    try {
      const document = (await $prismic.api.getSingle("about")).data;
      return {
        document
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>

<style lang="scss"></style>
