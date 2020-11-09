<template>
  <div class="page page-about">
    <img :src="document.my_photo.url" alt="Greg" class="profile-picture" />
    <h1 class="display-1">{{ $prismic.asText(document.intro) }}</h1>
    <div class="story">
      <template v-for="(p, index) in document.story">
        <h2 :key="index" v-if="p.type === 'heading2'">{{ p.text }}</h2>
        <p :key="index" v-if="p.type === 'paragraph'">{{ p.text }}</p>
      </template>
    </div>
    <pre>{{ document }}</pre>
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

<style lang="scss">
.story {
  max-width: 100ch;
  > h2 {
    margin-bottom: 1em;
    margin-top: 2em;
  }
}
.profile-picture {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 100%;
  position: relative;
  left: -2em;
  top: -2em;
}
</style>
