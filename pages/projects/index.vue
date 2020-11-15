<template>
  <div class="projects-page">
    <project-tile
      v-for="project in orderByYear"
      :key="project.id"
      :project="project"
    ></project-tile>
  </div>
</template>

<script>
import _ from 'lodash';
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
      loading: false
    };
  },
  computed: {
    orderByYear() {
      return _.orderBy(this.documents, ['data.meta_year'], ['desc']);
    }
  },
  async asyncData({ $prismic, error }) {
    try {
      const projects = await $prismic.api.query(
        $prismic.predicates.at("document.type", "project"), { orderings: '[document.results.meta_year desc]'}
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
