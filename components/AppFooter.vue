<template>
<footer class="footer">
  Fooooter
  <button class="scroll-up" @click="scrollTop">To top</button>
</footer>
</template>

<script>
export default {
  methods: {
    scrollTop() {
      window.scrollTo(0, 0);
    }
  }
}
</script>

<style>

</style>
