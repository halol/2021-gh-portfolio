<template>
  <div>
    <nuxt-link to="/projects" class="button-back"
      ><i class="ci-short_left"></i
    ></nuxt-link>
    <header class="project_header" :style="{ background: document.key_color }">
      <div class="project-hero">
        <h5 class="label-company is-page">{{ document.company[0].text }}</h5>
        <div class="flex-end">
          <h1 class="label-title is-page">
            {{ document.project_name[0].text }}
          </h1>

          <p class="label-description is-page">
            {{ document.project_intro[0].text }}
          </p>
          <widget-platforms :platforms="document.platforms"></widget-platforms>
        </div>
      </div>
      <div class="mockup-holder hidden-sm">
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
    </header>
    <div class="layout">
      <slices-wrapper :slices="document.body"></slices-wrapper>
    </div>
  </div>
</template>

<script>
export default {
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
  outline: 1px solid blue;
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

.button-back {
  position: fixed;
  top: 2em;
  left: 2em;
  z-index: 999;
  background: white;
  box-shadow: 0 0 0 rgba($black, 0);
  border-radius: 999px;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  will-change: box-shadow;
  transition: all 300ms ease;
  > i {
    font-size: 1.5em;
  }
  &::-moz-selection {
    outline: none;
    background: none;
  }
  &:hover {
    box-shadow: 0 2px 12px rgba($black, 0.2);
  }
  @include sm {
    top: auto;
    bottom: 1em;
    left: 1em;
  }
}

.mockup-holder {
  display: flex;
  flex-direction: row;
  flex-flow: nowrap;
  outline: 1px solid greenyellow;
  align-items: top;
  position: relative;
  top: 96px;
}

.header-mockup-image {
  height: 80vh;
  outline: 1px solid greenyellow;
  &:not(:last-child) {
    margin-right: 32px;
  }
}
</style>
