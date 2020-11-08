<template>
  <div class="project-tile" :style="{ background: project.data.key_color }">
    <div class="project-tile__description">
      <h5 class="label-company">{{ project.data.company[0].text }}</h5>
      <div class="project-tile__description-heading">
        <h2 class="label-title">{{ project.data.project_name[0].text }}</h2>

        <p class="label-description hidden-sm">
          {{ project.data.project_intro[0].text }}
        </p>
        <widget-platforms
          :platforms="project.data.platforms"
        ></widget-platforms>
        <nuxt-link :to="link" class="button button-bright"
          >Open project</nuxt-link
        >
      </div>
    </div>
    {{ project.data.body["image_gallery"] }}
    <div
      class="project-tile__mockup"
      :style="{ background: project.data.key_color }"
    >
      <widget-cover :slices="project.data.body"></widget-cover>
    </div>
  </div>
</template>

<script>
import LinkResolver from "~/plugins/link-resolver.js";
export default {
  props: ["project"],
  data() {
    return {
      link: ""
    };
  },
  created() {
    this.link = LinkResolver(this.project);
  },
  computed: {
    projectColor() {
      return this.color;
    },
    computeLink() {
      //return this.$route.path + '/' + this.project.uid;
      return this.project.uid;
    }
  }
};
</script>

<style lang="scss">
.project-link {
  display: block;

  &:not(:last-child) {
    margin-bottom: 4em;
  }

  &:hover,
  &:active {
    .project-tile {
      box-shadow: 0 0.5em 1em rgba($black, 5%);
    }
  }
}

.project-tile {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  border-radius: $border-radius-large;
  transition: box-shadow 300ms ease;
  will-change: box-shadow;
  background: white;
  position: relative;

  min-height: 60vh;

  &:not(:last-child) {
    margin-bottom: 4em;
  }

  @include sm {
    height: auto;
    min-height: auto;
    flex-direction: column-reverse;
    border-radius: $border-radius-small;
  }
}

.project-tile__description-heading {
  @include sm {
    width: 100%;
  }
}

.project-tile__description {
  padding: padding("large");
  padding-right: padding("xxl") * 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  //justify-content: center;
  flex: 3;
  color: white;

  @include sm {
    flex-direction: column;
    min-height: auto;
    padding: 1em;
    height: auto;
    justify-content: flex-start;
  }
}

.project-tile__mockup {
  border-radius: $border-radius-large;
  flex: 5;
  background: color($theme-light, "muted");
  position: relative;
  @include sm {
    flex: 1;
  }
}
</style>
