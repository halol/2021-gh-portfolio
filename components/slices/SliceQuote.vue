<template>
  <div class="slice slice-quote">
    <p class="quote">{{ $prismic.asText(slice.primary.quote) }}</p>
    <div class="quote-author">
      <img
        class="avatar"
        :src="slice.primary.portrait_author.mobile.url"
        :alt="slice.primary.name_of_the_author"
        draggable="false"
      />
      <div class="author">
        <p class="quote-author-name">
          {{ $prismic.asText(slice.primary.name_of_the_author) }}
        </p>
        <small class="quote-author-role">Product designer</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["slice"]
};
</script>

<style lang="scss"></style>
