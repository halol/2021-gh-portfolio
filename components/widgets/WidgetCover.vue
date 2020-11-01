<template>
<div class="mockup-floater">
  <template v-for="slice in slices">
    <template v-if="slice.slice_type === 'image_gallery'">
      <img v-for="(mockup, index) in slice.items" :key="index" :src="mockup.mockup_image.url" alt="Mockup" class="mockup-image animated fadeInRight" />
    </template>
  </template>

</div>
</template>

<script>
export default {
  props: ['slices'],
}
</script>

<style>
.list-item {
  display: inline-block;
  margin-right: 10px;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter,
.list-leave-to

/* .list-leave-active below version 2.1.8 */
  {
  opacity: 0;
  transform: translateY(30px);
}
</style>
