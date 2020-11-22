<template>
  <div class="flex mt-10" role="platforms">
    <div
      class="px-4 py-2 bg-white bg-opacity-25 text-white rounded-full mr-2"
      v-for="(platform, index) in platforms"
      :key="'platform-' + index"
    >
      {{ platform.platform }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["platforms"]
};
</script>

<style lang="scss"></style>
