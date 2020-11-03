<template>
<div>
  <nuxt-link to="/projects" class="button-back">Back</nuxt-link>
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
  computed: {
    hexToHSL(H) {
      // Convert hex to RGB first
      let r = 0,
        g = 0,
        b = 0;
      if (H.length == 4) {
        r = "0x" + H[1] + H[1];
        g = "0x" + H[2] + H[2];
        b = "0x" + H[3] + H[3];
      } else if (H.length == 7) {
        r = "0x" + H[1] + H[2];
        g = "0x" + H[3] + H[4];
        b = "0x" + H[5] + H[6];
      }
      // Then to HSL
      r /= 255;
      g /= 255;
      b /= 255;
      let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

      if (delta == 0)
        h = 0;
      else if (cmax == r)
        h = ((g - b) / delta) % 6;
      else if (cmax == g)
        h = (b - r) / delta + 2;
      else
        h = (r - g) / delta + 4;

      h = Math.round(h * 60);

      if (h < 0)
        h += 360;

      l = (cmax + cmin) / 2;
      s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
      s = +(s * 100).toFixed(1);
      l = +(l * 100).toFixed(1);

      return "hsl(" + h + "," + s + "%," + l + "%)";
    }
  },
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
}

.offset-to-center {
  outline: 1px solid red;
  //margin-top: 5em;
  padding: 6em !important;
}

.label-intro {
  font-size: 2em;
}

.button-back {
  position: fixed;
  top: 2em;
  left: 2em;
  z-index: 999;
}

.offset-cover {
  position: absolute;
  width: 100%;
  height: 80%;
  bottom: -40%;
  left: 50%;
  transform: translateX(-50%);

}
</style>
