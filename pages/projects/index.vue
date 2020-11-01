<template>
<div class="projects-page">
  <project-tile v-for="project in documents" :key="project.id" :project="project"></project-tile>
</div>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
      documents: [],
      loading: false,
    }
  },
  methods: {
    async getProjects() {
      const response = await this.$axios.$get('https://5f99f6f99d94640016f703e7.mockapi.io/projects');
      this.projects = response;
      console.log(response);
    }
  },
  mounted: function () {

  },
  beforeMount() {
    this.getProjects();
  },
  async asyncData({
    $prismic,
    error
  }) {
    try {
      const projects = await $prismic.api.query(
        $prismic.predicates.at("document.type", "project")
      );

      return {
        documents: projects.results
      }
    } catch (e) {
      error({
        statusCode: 404,
        message: "Page not found"
      });
    }
  },
}
</script>

<style>

</style>
