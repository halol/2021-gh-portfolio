<template>
  <div>
    <nuxt-link to="/projects" class="button-back"
      ><i class="ci-close_big"></i
    ></nuxt-link>
    <header class="project_header" :style="{ background: document.key_color }">
      <div class="project-hero">
        <h5 class="label-company is-page">
          {{ $prismic.asText(document.company) }}
        </h5>
        <div
          class="mockup-holder hidden-sm"
          :style="{ background: document.key_color }"
        >
          <template v-for="slice in document.body">
            <template v-if="slice.slice_type === 'image_gallery'">
              <img
                v-for="(mockup, index) in slice.items"
                :key="index"
                :src="mockup.mockup_image.url"
                alt="Mockup"
                class="header-mockup-image"
                draggable="false"
              />
            </template>
          </template>
        </div>
        <div class="flex-end"></div>
      </div>
    </header>

    <div class="container-flex">
      <h1 class="label-title is-page">
        {{ $prismic.asText(document.project_name) }}
      </h1>

      <p class="label-description is-page">
        {{ $prismic.asText(document.project_intro) }}
      </p>
      <widget-platforms :platforms="document.platforms"></widget-platforms>
      <slices-wrapper :slices="document.body"></slices-wrapper>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.document.company[0].text} | ${this.document.project_name[0].text}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.document.project_intro[0].text
        }
      ]
    };
  },
  scrollToTop: true,
  layout: "project",
  async asyncData({ $prismic, params, route, error }) {
    try {
      // Query to get post content
      const document = (await $prismic.api.getByUID("project", params.uid))
        .data;
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
$header-height: 80vh;
.layout {
  padding: 96px;
  outline: 1px solid purple;
  @include sm {
    padding: 1em;
  }
}
.project_header {
  height: $header-height;
  position: relative;
  overflow: hidden;
  display: grid;
  gap: 48px;
  grid-template-columns: 1fr 2fr;
  @include sm {
    display: block;
    height: auto;
    min-height: 30vh;
  }
}

.project-hero {
  // outline: 1px solid blue;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-content: space-between;
  flex-flow: wrap;
  position: relative;
  padding: 96px;
  min-width: 40vw;
  @include sm {
    padding: 1em;
    width: auto;
    align-content: flex-end;
  }
}

.mockup-holder {
  display: flex;
  flex-direction: row;
  flex-flow: nowrap;
  // outline: 1px solid greenyellow;
  align-items: top;
  position: relative;
  top: 96px;
}

.header-mockup-image {
  height: 80vh;
  // outline: 1px solid greenyellow;
  &:not(:last-child) {
    margin-right: 32px;
  }
}
</style>
