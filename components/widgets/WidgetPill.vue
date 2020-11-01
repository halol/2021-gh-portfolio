<template>
<div class="pill">
  <slot></slot>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.pill {
  border-radius: $border-radius;
  padding: padding('small') padding('medium');
  display: inline-block;
  font-weight: 600;
  line-height: 1.4em;
  font-size: 0.8em;
  background-color: rgba(white, 0.1);
  color: white;

  &:not(:last-child) {
    margin-right: 1em;
  }
}
</style>
