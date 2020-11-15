<template>
  <div class="slice-brands">
    <h2 class="brands-title">
      {{ $prismic.asText(slice.primary.brands_title) }}
    </h2>

    <div class="logos">
      <div
        class="logo"
        v-for="(logo, index) in slice.items"
        :key="'logo-' + index"
      >
        <img
          :src="logo.company_logo.url"
          :alt="logo.company_logo.alt"
          class="logo-image"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["slice"]
};
</script>

<style lang="scss">
.brands-title {
  //   padding: 1em;
  margin-bottom: 2em;
  @include sm {
    text-align: center;
  }
}

.logos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  //padding: 2em;
  @include sm {
    flex-direction: column;
    //align-items: flex-start;
  }
}
.logo {
  height: 60px;
  width: auto;
}
.logo-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: grayscale(1);
}
</style>
