<template>
  <div class="page-artwork-uid">
    <div class="artwork-cover" :style="featuredImage">
      <nuxt-link to="/art" class="button-back"
        ><i class="ci-close_big"></i
      ></nuxt-link>
      <div class="artwork-header" :class="{ hiddenBox: !showInfo }">
        <div class="artwork-title">
          <h1>{{ $prismic.asText(document.title) }}</h1>
          <button class="button button-icon" @click="toggleBox">
            <i v-if="showInfo" class="ci-hide" style="margin: 0;"></i>
            <i v-else class="ci-show" style="margin: 0;"></i>
          </button>
        </div>
        <div class="artwork-description">
          <p class="artwork-details">Acrylic, Size: 80/80/2</p>
          <p class="artwork-description-text" v-if="getDescription">
            {{ getDescription }}
          </p>
        </div>
        <div class="art-form"></div>
        <div class="art-controls">
          <widget-status
            :status="document.status"
            :price="document.price"
          ></widget-status>
          <a
            v-if="document.status === 'Available'"
            :href="generateMail"
            class="button button-bright make-it-dark"
          >
            Reserve
          </a>
        </div>
      </div>
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
          content: "AAAA"
        }
      ]
    };
  },
  layout: "project",
  data() {
    return {
      selectedImage: 0,
      gallery: [],
      showInfo: true
    };
  },
  methods: {
    toggleBox: function() {
      return (this.showInfo = !this.showInfo);
    },
    currentImage: function(selectedImage) {
      return this.selectedImage == selectedImage;
    },
    setCurrentImage: function(index) {
      // Logic for loading
      this.selectedImage = index;
      this.showInfo = false;
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
    },
    generateMail() {
      return `mailto:grzegorz.hadala@gmail.com?subject=Reserve ${this.document.title[0].text}&body=Hey Greg!`;
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
.page-artwork-uid {
  height: 100vh;
}
.artwork-header {
  display: flex;
  //margin: 2em 0;
  min-width: 500px;
  flex-direction: column;
  position: absolute;
  bottom: 2em;
  left: 2em;
  z-index: 500;
  background: white;
  padding: 1em;
  border-radius: $border-radius-small;
  will-change: contents;
  transition: all 300ms ease;
  &.hiddenBox {
    will-change: contents;
    transition: all 300ms ease;
    transform: translateX(calc(-100% + 3em)) translateY(calc(+100% - 2.5em));
    background: transparent;
  }
}
.artwork-title {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1em;
}
.art-controls {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
  //height: 90vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: $grey-light;
  //border-radius: $border-radius;
  height: 100vh;
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
.artwork-description-text {
  max-width: 60ch;
}
.artwork-toggle {
  display: flex;
  top: 2em;
  left: 2em;
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
