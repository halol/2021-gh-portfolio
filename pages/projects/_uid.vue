<template>
  <div class="_uid-project relative">
    <nuxt-link
      to="/projects"
      class="bg-white shadow-1 rounded-full fixed top-12 right-12 w-10 h-10 flex items-center justify-center"
      ><i class="ci-close_big"></i
    ></nuxt-link>
    <header
      class="flex max-h-100vh p-32"
      :style="{ background: document.key_color }"
    >
      <div class="text-xl" role="project-title">
        <div class="text-white text-2xl">
          {{ $prismic.asText(document.company) }}
        </div>
        <div class="text-white text-opacity-75 mb-2">{{ parseYear }}</div>
        <h1
          class="text-5xl text-opacity-75 tracking-tight leading-tight max-w-4xl"
        >
          {{ $prismic.asText(document.project_name) }}
        </h1>
      </div>
    </header>
    <section
      class="px-24 grid grid-cols-4 overflow-hidden gap-10"
      :style="{ background: document.key_color }"
    >
      <template v-for="slice in document.body">
        <template v-if="slice.slice_type === 'image_gallery'">
          <img
            v-for="(mockup, index) in slice.items"
            :key="index"
            :src="mockup.mockup_image.url"
            alt="Mockup"
            class="h-96 -mb-24"
            draggable="false"
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
