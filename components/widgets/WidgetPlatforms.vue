<template>
  <div class="platforms">
    <widget-pill
      class="pill"
      v-for="(platform, index) in platforms"
      :key="'platform-' + index"
    >
      {{ platform.platform }}
    </widget-pill>
  </div>
</template>

<script>
export default {
  props: ["platforms"]
};
</script>

<style lang="scss">
.platforms + .button {
  margin-top: 4em;
  @include sm {
    margin-top: 1em;
  }
}
</style>
