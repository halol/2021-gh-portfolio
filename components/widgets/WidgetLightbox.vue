<template>
  <div class="overlay widget-lightbox">
    <div class="lightbox-navigation">
      <button>Prev</button>
      <button>Next</button>
      <button>Close</button>
    </div>
    <div class="lightbox-media-center">
      <img
        src="http://placekitten.com/400/400"
        alt="Kittens"
        draggable="false"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.overlay {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(black, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
}
</style>
