<template>
  <div class="page-blog">
    <div class="blog-layout">
      <div class="posts">
        <div
          v-for="post in blog"
          :key="post.id"
          class="blog-tile card"
          :style="renderCover(post.data.cover.url)"
        >
          <div class="post-summary">
            <h2 class="post-title">{{ $prismic.asText(post.data.title) }}</h2>
            <p class="post-blurb">{{ $prismic.asText(post.data.blurb) }}</p>
            <nuxt-link to="/post" class="button button-link"
              >Read full story <i class="ci-long_right"></i
            ></nuxt-link>
          </div>
        </div>
      </div>
      <div class="blog-navigation">
        <div class="post-count">Posts: {{ getPostCount }}</div>
        <div class="blog-quick-links">
          <ul>
            <li v-for="post in blog" :key="post.uid">
              <nuxt-link to="/post">{{
                $prismic.asText(post.data.title)
              }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <pre>{{ blog }}</pre>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `Blog | Grzegorz Hadała - Product Designer`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Description about blog"
        }
      ]
    };
  },
  methods: {
    renderCover(url) {
      return `background-image: url('${url}');`;
    }
  },
  computed: {
    getPostCount() {
      return this.blog.length;
    }
  },
  async asyncData({ $prismic, error }) {
    try {
      const blog = await $prismic.api.query(
        $prismic.predicates.at("document.type", "blog")
      );

      return {
        blog: blog.results
      };
    } catch (e) {
      error({
        statusCode: 404,
        message: "Page not found"
      });
    }
  }
};
</script>

<style lang="scss"></style>
