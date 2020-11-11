<template>
  <div class="page-artwork-uid">
    <nuxt-link to="/art" class="button-back"
      ><i class="ci-close_big"></i
    ></nuxt-link>
    <header class="artwork-header">
      <div class="artwork-heading">
        <h1>{{ $prismic.asText(document.title) }}</h1>
        <p>Acrylic, Size: 80/80/2</p>
      </div>
      <div class="art-controls">
        <widget-status
          :status="document.status"
          :price="document.price"
        ></widget-status>
        <a href="#" class="button button-bright">Reserve</a>
      </div>
    </header>
    <div class="artwork-cover" :style="featuredImage">
      <div class="artwork-toggle">
        <div
          class="artwork-thumb"
          v-for="(thumb, index) in gallery"
          :key="index"
          @click="setCurrentImage(index)"
          :class="{ active: selectedImage === index }"
          :style="createThumbnail(index)"
        ></div>
      </div>
    </div>
    <div class="artwork-description">Something</div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `Art | ${this.document.title[0].text}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.document.description[0].text
        }
      ]
    };
  },
  layout: "project",
  data() {
    return {
      selectedImage: 0,
      gallery: []
    };
  },
  methods: {
    currentImage: function(selectedImage) {
      return this.selectedImage == selectedImage;
    },
    setCurrentImage: function(index) {
      // Logic for loading
      this.selectedImage = index;
    },
    createThumbnail: function(index) {
      return `background-image: url('${this.gallery[index]}');`;
    },
    createGallery: function() {
      let cover = this.document.artwork_cover.url;
      this.gallery.push(cover);
      if (
        this.document.body[0] &&
        this.document.body[0].slice_type === "gallery"
      ) {
        let items = this.document.body[0].items;
        for (let i = 0; i < items.length; i++) {
          this.gallery.push(items[i].gallery_photo.url);
        }
      }
    }
  },
  computed: {
    featuredImage: function() {
      return `background-image: url(${this.gallery[this.selectedImage]};`;
    }
  },
  mounted() {
    this.createGallery();
  },
  async asyncData({ $prismic, params, route, error }) {
    try {
      // Query to get post content
      const document = (await $prismic.api.getByUID("art", params.uid)).data;
      return {
        // Set slices as variable
        document: document
      };
    } catch (e) {
      // Returns error page
      error({
        statusCode: 404,
        message: "Page not found"
      });
    }
  }
};
</script>

<style lang="scss">
.artwork-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2em 0;
}
.art-controls,
.artwork-heading {
  display: flex;
  flex-direction: row;
  align-items: center;
  > p {
    margin: 0;
    color: $grey-medium;
  }
  > * {
    &:not(:last-child) {
      margin-right: 2em;
    }
  }
}
.artwork-cover {
  height: 90vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: $grey-light;
  border-radius: $border-radius;
  position: relative;
  overflow: hidden;
  &:after {
    content: "";
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    height: 100px;
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
  }
}
.artwork-toggle {
  display: flex;
  top: 1em;
  left: 1em;
  z-index: 50;
  position: absolute;
  align-items: flex-end;

  > * {
    will-change: contents;
    transition: all 300ms ease;
    background-color: rgba(white, 0.5);
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: $border-radius-small / 2;
    height: 3em;
    width: 4em;
    filter: grayscale(100%);
    &.active {
      background-color: white;
      box-shadow: 0 0 0 4px rgba($black, 0.5);
      filter: grayscale(0%);
    }
    display: inline-block;
    &:hover,
    &:focus {
      cursor: pointer;
      filter: grayscale(0%);
    }
    &:not(:last-child) {
      margin-right: 0.5em;
    }
  }
}
</style>
