<template>
  <div class="slice-promo">
    <h2>{{ $prismic.asText(slice.primary.promo_title) }}</h2>
    <div
      class="slice-promo-single"
      v-for="(item, index) in slice.items"
      :key="'slide-' + index"
    >
      <div class="slice-promo__description">
        <h3>{{ $prismic.asText(item.slide_title) }}</h3>
        <img
          :src="item.slide_image.url"
          :alt="item.slide_image.alt"
          class="visible-sm __promo-on-sm promo-image"
        />
        <prismic-rich-text
          :field="item.slide_description"
          class="slide-promo-rich-text"
        />
      </div>
      <div class="slice-promo__image hidden-sm">
        <img
          :src="item.slide_image.url"
          :alt="item.slide_image.alt"
          class="promo-image"
        />
      </div>
    </div>
    <small
      >Illustrations by
      <a href="https://storytale.io/packages/denmark/" target="_blank"
        >Storytale.io</a
      ></small
    >
  </div>
</template>

<script>
export default {
  props: ["slice"]
};
</script>

<style lang="scss">
.slice-promo-single {
  margin: 0 auto;
  //outline: 1px solid red;
  max-width: $screenshot-width;
  display: flex;
  align-items: center;
  flex-direction: row;
  @include sm {
    flex-direction: column;
  }
  margin-bottom: 3em;
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
}
.slice-promo__description,
.slice-promo__image {
  flex: 1 1 0px;
  //outline: 1px solid orange;
}
.slice-promo__image {
  text-align: center;
}
.promo-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.slide-promo-rich-text {
  a {
    text-decoration: underline;
  }
}
</style>
