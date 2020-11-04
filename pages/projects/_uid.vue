<template>
<div>
  <nuxt-link to="/projects" class="button-back">Back</nuxt-link>
  <header class="project_header" :style="{ background: document.key_color }">

    <div class="project-hero">
      <h5 class="label-company is-page">{{document.company[0].text}}</h5>

      <h1 class="label-title is-page">{{ document.project_name[0].text }}</h1>

      <p class="label-description is-page">
        {{document.project_intro[0].text}}
      </p>
      <widget-platforms :platforms="document.platforms"></widget-platforms>

    </div>

    <div class="widget-mockups-holder">
      <widget-mockups :slices="document.body"></widget-mockups>
    </div>
  </header>
  <div class="bleble">
    <slices-wrapper :slices="document.body"></slices-wrapper>
  </div>
</div>
</template>

<script>
export default {
  layout: 'project',
  async asyncData({
    $prismic,
    params,
    route,
    error
  }) {
    try {
      // Query to get post content
      const document = (await $prismic.api.getByUID('project', params.uid)).data
      return {
        // Set slices as variable
        document: document
      }
    } catch (e) {
      // Returns error page
      error({
        statusCode: 404,
        message: 'Page not found'
      })
    }
  },
}
</script>

<style lang="scss">
.project_header {
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr 5fr;
  outline: 2px solid pink;

  >* {
    outline: 2px solid orangered;
  }
}

.project-hero {
  padding: 5em 10em;
}

.offset-to-center {}

.button-back {
  position: fixed;
  top: 2em;
  left: 2em;
  z-index: 999;
}

.widget-mockups-holder {
  height: 100%;
}
</style>
