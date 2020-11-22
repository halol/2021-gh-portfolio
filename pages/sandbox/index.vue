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

<style lang="scss"></style>
