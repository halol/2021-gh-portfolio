<template>
  <div class="projects-page py-10">
    <nuxt-link
      v-for="(project, index) in documents"
      :key="index"
      :to="'/projects/' + project.uid"
      class="rounded-2xl block mb-10 flex flex-row overflow-hidden h-card shadow hover:shadow-lg transition duration-300"
      :style="{ background: project.data.key_color }"
    >
      <div class="p-12 w-5/12">
        <p class="text-white font-bold">
          {{ $prismic.asText(project.data.company) }}
        </p>
        <p class="text-white opacity-75">
          {{ project.data.meta_year.substring(0, 4) }}
        </p>
        <h2 class="text-white text-2xl leading-tight my-6 font-semibold">
          {{ $prismic.asText(project.data.project_name) }}
        </h2>
        <p class="text-white">
          {{ $prismic.asText(project.data.project_intro) }}
        </p>
        <widget-platforms
          :platforms="project.data.platforms"
        ></widget-platforms>
      </div>
      <div class="w-7/12 relative pt-5 pl-5">
        <widget-cover :slices="project.data.body"></widget-cover>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import _ from "lodash";
import LinkResolver from "~/plugins/link-resolver.js";
export default {
  head() {
    return {
      title: `Projects | Grzegorz Hadała - Product Designer`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Description about projects"
        }
      ]
    };
  },
  data() {
    return {
      loading: false,
      link: ""
    };
  },
  computed: {
    orderByYear() {
      return _.orderBy(this.documents, ["data.meta_year"], ["desc"]);
    }
  },
  created() {
    //this.link = LinkResolver(this.project);
  },
  async asyncData({ $prismic, error }) {
    try {
      const projects = await $prismic.api.query(
        $prismic.predicates.at("document.type", "project"),
        { orderings: "[document.results.meta_year desc]" }
      );

      return {
        documents: projects.results
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
