<template>
<div class="sidebar-layout main-grid">
  <div class="sidebar">
    <app-navigation type="vertical"></app-navigation>
  </div>
  <div class="main">
    <Nuxt />
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.main-grid {
  display: grid;
  grid-template-columns: minmax(300px, 500px) 1fr;
  grid-template-rows: 6em;
  gap: 2em 0em;
  grid-template-areas:
    "sidebar main";
}

.sidebar {
  grid-area: sidebar;
  background: white;
  position: fixed;
  top: 0;
  bottom: 0;
}

.main {
  grid-area: main;
  padding: padding('xxl');
}
</style>
