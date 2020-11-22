<template>
  <div class="page-artwork-uid">
    <div class="artwork-cover" :style="featuredImage">
      <nuxt-link to="/art" class="button-back"
        ><i class="ci-close_big"></i
      ></nuxt-link>
      <div class="artwork-header hidden-sm" :class="{ hiddenBox: !showInfo }">
        <div class="artwork-title">
          <h1>{{ $prismic.asText(document.title) }}</h1>
          <button class="button button-icon" @click="toggleBox">
            <i v-if="showInfo" class="ci-hide" style="margin: 0;"></i>
            <i v-else class="ci-show" style="margin: 0;"></i>
          </button>
        </div>
        <div class="artwork-description">
          <p class="artwork-details">Acrylic, Size: 80/80/2</p>
          <p class="artwork-description-text"></p>
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
    <div class="artwork-footer visible-sm">
      <div class="artwork-title">
        <h1>{{ $prismic.asText(document.title) }}</h1>
      </div>
      <div class="artwork-description">
        <p class="artwork-details">Acrylic, Size: 80/80/2</p>
        <p class="artwork-description-text"></p>
      </div>
      <div class="art-form"></div>
      <widget-status
        :status="document.status"
        :price="document.price"
      ></widget-status>
      <div class="art-controls">
        <a
          v-if="document.status === 'Available'"
          :href="generateMail"
          class="button button-bright make-it-dark"
        >
          Reserve
        </a>
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

<style lang="scss"></style>
