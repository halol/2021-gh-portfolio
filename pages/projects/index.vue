<template>
  <div class="projects-page">
    <project-tile
      v-for="project in documents"
      :key="project.id"
      :project="project"
    ></project-tile>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    };
  },

  async asyncData({ $prismic, error }) {
    try {
      const projects = await $prismic.api.query(
        $prismic.predicates.at("document.type", "project")
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
