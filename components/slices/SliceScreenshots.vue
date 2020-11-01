<template>
<div class="slice-screenshots">
  <figure v-for="item in slice.items" :key="item.id" class="card screenshot">
    <img class="screenshot_img" :src="item.screenshot_image.url" :alt="item.screenshot_caption.text">
    <figcaption class="fig-caption">
      {{ $prismic.asText(item.screenshot_caption) }}
    </figcaption>
  </figure>
</div>
</template>

<script>
// item.screenshot_image.url
export default {
  props: ['slice']
}
</script>

<style lang="scss">
.slice-screenshots {
  max-width: 50em;
  margin: 0 auto;
}

.screenshot {
  overflow: hidden;
}

.screenshot_img {
  width: 100%;
  display: block;
}

.fig-caption {
  padding: padding("normal") padding("small");
}

.screenshot {
  &:not(:last-child) {
    margin-bottom: 3em;
  }

  background: color($theme-light, "screenshot");

  @include theme-dark {
    background: color($theme-dark, "screenshot");
  }
}

.fig-caption {
  text-align: center;
  color: color($theme-light, "muted");

  @include theme-dark {
    bcolor: color($theme-dark, "muted");
  }
}

// .slice-screenshots {
//   background: color($theme-light, "bg-card");

//   @include theme-dark {
//     background: color($theme-dark, "bg-card");
//   }
// }
</style>
