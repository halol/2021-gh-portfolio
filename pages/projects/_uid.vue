<template>
  <div class="_uid-project relative">
    <nuxt-link
      to="/projects"
      class="bg-white shadow-1 rounded-full fixed w-10 h-10 flex items-center justify-center hover:shadow-lg transition-shadow"
      style="top: 5rem; left: 5rem;"
      ><i class="ci-close_big text-2xl"></i
    ></nuxt-link>
    <header class="flex p-32" :style="{ background: document.key_color }">
      <div class="text-xl container mx-auto" role="project-title">
        <div class="text-white text-2xl">
          {{ $prismic.asText(document.company) }}
        </div>
        <div class="text-white text-opacity-75 mb-2">{{ parseYear }}</div>
        <h1 class="text-5xl text-white tracking-tight leading-tight">
          {{ $prismic.asText(document.project_name) }}
        </h1>
        <widget-platforms :platforms="document.platforms"></widget-platforms>
      </div>
    </header>
    <section
      class="overflow-hidden flex flex-row w-100vw justify-center"
      :style="{ background: document.key_color }"
      style="height: 800px; width: auto;"
    >
      <template v-for="slice in document.body">
        <template v-if="slice.slice_type === 'image_gallery'">
          <img
            v-for="(mockup, index) in slice.items"
            :key="index"
            :src="mockup.mockup_image.url"
            alt="Mockup"
            class="object-scale-down mx-10"
            draggable="false"
            style="height: 900px"
          />
        </template>
      </template>
    </section>
    <div class="container mx-auto prose py-10">
      <prismic-rich-text
        :field="document.project_intro"
        class="mb-6 text-2xl font-light"
      />

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
      return this.document.meta_year.substring(0, 4);
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

<style lang="scss"></style>
