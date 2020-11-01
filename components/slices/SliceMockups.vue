<template>
<div class="slice-mockups">
  <div class="mockup" v-for="item in slice.items" :key="item.id">
    <template v-if="item.mockup_type === 'mobile'" name="mockup-mobile">
      <div class="mockup-container mockup-mobile">
        <img class="mockup_image" :src="item.mockup_image.url" :alt="item.mockup_caption[0].text">

      </div>
    </template>
    <template v-if="item.mockup_type === 'desktop'" name="mockup-mobile">
      <div class="mockup-container mockup-desktop">
        <img class="mockup_image" :src="item.mockup_image.url" :alt="item.mockup_caption[0].text">

      </div>
    </template>
    <template v-if="item.mockup_type === 'tablet'" name="mockup-mobile">
      <div class="mockup-container mockup-tablet">
        <img class="mockup_image" :src="item.mockup_image.url" :alt="item.mockup_caption[0].text">

      </div>
    </template>
    <template v-if="item.mockup_type === 'default'" name="mockup-mobile">
      <div class="mockup-container mockup-default">
        <img class="mockup_image" :src="item.mockup_image.url" :alt="item.mockup_caption[0].text">
      </div>
    </template>
  </div>
</div>
</template>

<script>
export default {
  props: ['slice']
}
</script>

<style lang="scss">
.slice-mockups {
  max-width: 70em;
  margin: 0 auto;
}

.mockup {
  position: relative;

  &:not(:last-child) {
    margin-bottom: 2em;
  }
}

.slice-mockups {
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 500px;
  gap: 2em;
  position: relative;

  >* {

    position: relative;
    height: 500px;
  }
}

.mockup-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // margin: 0 auto;
  height: inherit;
  position: relative;
}

.mockup_image {
  object-fit: contain;
  width: 100%;
  height: 500px;
  margin: 0;
}
</style>
