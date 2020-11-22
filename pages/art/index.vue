<template>
  <div class="art-page">
    <div class="art-gallery">
      <div
        class="art-gallery-tile"
        v-for="artwork in gallery"
        :key="artwork.id"
        @click="openArtwork(artwork.uid)"
      >
        <div
          class="artwork-image"
          :style="parseStyle(artwork.data.artwork_cover.url)"
        ></div>
        <div class="artwork-meta">
          <div class="meta-top">
            <div class="artwork-title">{{ artwork.data.title[0].text }}</div>
            <widget-status
              :status="artwork.data.status"
              :price="artwork.data.price"
            ></widget-status>
          </div>
          <div class="meta-bottom">
            <span style="font-weight: 600;">{{ artwork.data.medium }}</span>
            <template v-if="checkArray(artwork.data.dimensions)"
              ><span
                >Size: {{ $prismic.asText(artwork.data.dimensions) }}</span
              ></template
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `Art | Grzegorz Hadała - Product Designer`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Description about art"
        }
      ]
    };
  },
  methods: {
    parseStyle(url) {
      return `background-image: url(${url});`;
    },
    checkArray(array) {
      return array === undefined || array.length == 0 ? false : true;
    },
    checkValue(value) {
      return value === undefined ? false : true;
    },
    openArtwork(uid) {
      this.$router.push({
        path: `/art/${uid}`
      });
    }
  },
  async asyncData({ $prismic, error }) {
    try {
      const artworks = await $prismic.api.query(
        $prismic.predicates.at("document.type", "art")
      );

      return {
        gallery: artworks.results
      };
    } catch (e) {
      error({
        statusCode: 404,
        message: "Page not found"
      });
    }
  }
};
</script>

<style lang="scss"></style>
