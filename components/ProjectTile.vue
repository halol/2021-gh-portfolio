<template>
<div class="project-tile" :style="{ background: project.data.key_color }">
  <div class="project-tile__description">
    <h5 class="label-company">{{project.data.company[0].text}}</h5>
    <div class="project-tile__description-heading">

      <h2 class="label-title">{{ project.data.project_name[0].text }}</h2>

      <p class="label-description">
        {{project.data.project_intro[0].text}}
      </p>
      <widget-platforms :platforms="project.data.platforms"></widget-platforms>
      <nuxt-link :to="computeLink" class="button button-bright">Open project</nuxt-link>
    </div>

  </div>
  {{project.data.body["image_gallery"]}}
  <div class="project-tile__mockup" :style="{ background: project.data.key_color }">
    <widget-cover :slices="project.data.body"></widget-cover>
  </div>
</div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      color: "#1774FF",
      platforms: ["iOS", "Android", "Web"]
    };
  },
  computed: {
    projectColor() {
      return this.color;
    },
    computeLink() {
      return this.$route.path + '/' + this.project.uid;
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
  // box-shadow: 0 0em 0em rgba(color($theme-light, "text-body"), 0%);
  position: relative;

  min-height: 60vh;

  //box-shadow: 0 0.5em 1em rgba(color($theme-light, "text-body"), 5%);

  &:not(:last-child) {
    margin-bottom: 4em;
  }

  @include sm {
    flex-direction: column-reverse;
  }
}

.project-tile__description {
  padding: padding('large');
  padding-right: padding('xxl') * 2;
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
  }
}

.label-company {
  margin: 0;
}

.label-title {
  margin: 0;
}

.label-description {
  margin-top: 1em;

  @include sm {
    //@debugdisplay: none;
  }
}

.project-tile__mockup {
  border-radius: $border-radius-large;
  flex: 5;
  background: color($theme-light, "muted");
  position: relative;
  //outline: 1px solid pink;

  @include sm {
    max-height: 50vh;
  }
}

.mockup-floater {
  //outline: 1px solid blue;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  position: absolute;
  left: -3em;
  top: 2em;
  bottom: 0em;
  //left: -50px;
  z-index: 3;
  //height: 70vh;

  @include sm {
    position: relative;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 90%;
    right: 0;
    padding: 1em;
    height: 70vh;
    justify-content: center;
    transform: translateX(-50%);
  }
}

.mockup-image {
  //outline: 1px solid green;
  display: block;
  position: relative;
  object-fit: scale-down;
  width: auto;
  height: 70vh;

  &:not(:last-child) {
    margin-right: 2em;
  }

  @include sm {
    object-fit: scale-down;
    height: calc(50vh - 2em);
  }
}

@keyframes transitionImage {
  0% {
    opacity: 0;
    // transform?

    transform: translate(-2em, -2em);
  }

  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}
</style>
