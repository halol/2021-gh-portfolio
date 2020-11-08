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

<style lang="scss">
.slice-quote {
  padding: 5em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50em;
  margin: 0 auto;

  .quote {
    text-align: center;
    font-size: 2em;
    line-height: 1.2;
    font-style: italic;
  }

  .quote-author {
    display: flex;
    flex-direction: row;
    align-items: center;

    .author {
      line-height: 1;

      .quote-author-name {
        margin: 0;
      }

      .quote-author-role {
        margin: 0;
        color: color($theme-light, "muted");

        @include theme-dark {
          color: color($theme-dark, "muted");
        }
      }
    }

    .avatar {
      display: inline-block;
      margin-right: 1em;
      border-radius: 100%;
      height: 3em;
      width: 3em;
    }
  }
}
</style>
