<template>
  <div class="sanbox app">
    <div class="sandbox-nav">
      <div class="logo">
        <p>Grzegorz Hadala — Product Designer</p>
      </div>
      <nav class="sandbox-nav-list">
        <a href="as">aasda</a>
        <a href="as">aasda</a>
        <a href="as">aasda</a>
        <a href="as">aasda</a>
      </nav>
      <div class="social">
        <button>
          <i class="ci-LinkedIn"></i>
          LinkedIn
        </button>
        <button>
          <i class="ci-instagram"></i>
          LinkedIn
        </button>
        <button>
          <i class="ci-Figma"></i>
          LinkedIn
        </button>
      </div>
    </div>
    <div class="sandbox-content">
      <div class="sandbox-container">
        <div class="item" v-for="(item, index) in 40" :key="index">
          Stuff {{ index }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "sandbox"
};
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  @include xxl {
    flex-direction: row;
  }
}

.sandbox-nav {
  background: rgba(orange, 0.2);
  @include xxl {
    width: 400px;
    padding: 2em;
  }
}

.sandbox-content {
  background: rgba(blue, 0.2);
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
  margin-right: calc(-1 * (100vw - 100%));
  @include xxl {
    flex: 5;
  }
}
.sandbox-container {
  margin: 3em 6em;
}
.item {
  background: rgba(teal, 0.2);
  &:not(:last-child) {
    margin-bottom: 2em;
  }
}
</style>
