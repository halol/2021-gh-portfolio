<template>
  <div>
    <nuxt-link to="/projects" class="button-back"
      ><i class="ci-close_big"></i
    ></nuxt-link>
    <header class="project_header" :style="{ background: document.key_color }">
      <div class="project-hero">
        <div class="company-and-platforms">
          <div class="uid-company">
            {{ $prismic.asText(document.company) }} 
          </div>
          <div class="uid-project-year">{{ parseYear }}</div>
          
        </div>
        <div
          class="mockup-holder"
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
      <div class="project-introduction">
        <h1 class="h1">
        {{ $prismic.asText(document.project_name) }}
      </h1>

      <p class="label-description is-page">
        {{ $prismic.asText(document.project_intro) }}
      </p>
      
      </div>
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
  computed: {
    parseYear() {
      return this.document.meta_year.substring(0, 4)
    }
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
    height: 100%;
    //height: 50vh;
  }
}

.project-introduction {
  max-width: $text-width;
  margin: 0 auto;
  margin-bottom: 3em;
}
.company-and-platforms {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.5em;
  color: white;
}
.uid-project-year {
  margin-left: 1em;
}
.uid-company {
  font-weight: 600;
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
  //min-width: 40vw;
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
