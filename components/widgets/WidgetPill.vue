<template>
  <div class="pill">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.pill {
  border-radius: $border-radius;
  padding: padding("small") 1em;
  display: inline-flex;
  font-weight: 600;
  line-height: 1.4em;
  font-size: 0.8em;
  background-color: rgba(white, 0.2);
  color: white;

  &:not(:last-child) {
    margin-right: 1em;
    margin-bottom: 0.5em;
  }
}
</style>
