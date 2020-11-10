<template>
  <div class="app-flex">
    <div class="nav-flex">
      <app-navigation></app-navigation>
    </div>
    <div class="content-flex">
      <div class="container-flex">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.app-flex {
  display: flex;
  flex-direction: column;
  height: 100vh;
  @include xxl {
    flex-direction: row;
  }
  @include sm {
    height: auto;
    display: block;
  }
}

.nav-flex {
  background: white;
  padding: 1em 0;
  @include xxl {
    width: 400px;
    padding: 2em;
  }
  @include sm {
    height: 64px;
    bottom: 0;
    display: block;
    position: fixed;
    width: 100%;
    z-index: 999;
    padding: 0;
  }
}

.content-flex {
  flex-grow: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-right: calc(-1 * (100vw - 100%));
  @include xxl {
    flex: 5;
  }
  @include sm {
    display: block;
    overflow: auto;
  }
}
.container-flex {
  margin: 5%;
  @include xxl {
    margin: 5% 10%;
  }
}
</style>
