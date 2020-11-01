<template>
<div>
  <nuxt-link to="/projects">Back</nuxt-link>
  <header class="project_header" :style="{ background: document.key_color }">

    <div class="project-tile__description offset-to-center">
      <h5 class="label-company">{{document.company[0].text}}</h5>
      <div class="project-tile__description-heading">

        <h1 class="label-title">{{ document.project_name[0].text }}</h1>

        <p class="label-intro">
          {{document.project_intro[0].text}}
        </p>
        <widget-platforms :platforms="document.platforms"></widget-platforms>
      </div>

    </div>

    <div class="offset-cover">
      <widget-cover :slices="document.body"></widget-cover>
    </div>
  </header>
  <div class="container">
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
    error
  }) {
    try {
      // Query to get post content
      const document = (await $prismic.api.getByUID('project', 'kitely')).data
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
  height: 80vh;
  position: relative;
  overflow: hidden;
}

.offset-to-center {
  outline: 1px solid red;
  margin-top: 5em;
  padding: 6em !important;
}

.label-intro {
  font-size: 2em;
}

.offset-cover {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: -50%;
}
</style>
