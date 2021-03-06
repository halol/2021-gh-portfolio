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

<style lang="scss">
.art-gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 700px;
  grid-gap: 2em;
  @include xxl {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 700px;
    grid-gap: 2em;
  }
  @include lg {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 700px;
    grid-gap: 2em;
  }
  @include md {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 500px;
    grid-gap: 2em;
  }
  @include sm {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 500px;
    grid-gap: 2em;
  }
}
.art-gallery-tile {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;

  &:hover {
    cursor: pointer;
    .artwork-image {
      background-size: cover;
      box-shadow: 0 12px 24px rgba($black, 0.1);
      transform: translateY(-2px);
    }
  }
}
.artwork-image {
  will-change: contents;
  transition: all 300ms ease;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: $grey-light;
  border-radius: $border-radius;
}
.artwork-meta {
  padding: 2em;
  display: flex;
  flex-direction: column;
  @include sm {
    padding: 1em;
  }

  .meta-top {
    @extend .h4;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @include sm {
      flex-direction: column;
    }
  }
  .meta-bottom {
    color: $grey-medium;
  }
}

.artwork-status {
  font-weight: 300;
}
.status-available {
  color: $primary;
}

.status-reserved {
  color: $grey-medium;
}
.status-sold {
  color: $secondary;
}
</style>
