<template>
  <div
    class="home-page
"
  >
    <h1>H1 Page title</h1>
    <h2>H2 Subpage title</h2>
    <h3>H3 Section header</h3>
    <h4>H4 Company name</h4>
    <h5>H5 CAPTION</h5>
    <h6>H6 something tiny</h6>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sunt quae
      soluta, officia numquam obcaecati provident illum, facilis in eius vero
      magni dolorum perferendis, unde iusto quos autem nemo itaque.
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio rerum
      nobis numquam, nisi eos eveniet voluptatibus tempora, ipsa modi ad illum
      molestias cupiditate! Rerum repellendus quia voluptates, totam minima
      consectetur.
    </p>
    <ul>
      <li>Something <a href="#">here</a></li>
      <li>Something <a href="#">here</a></li>
      <ul>
        <li>Something <a href="#">here</a></li>
        <li>Something <a href="#">here</a></li>
      </ul>
    </ul>

    <ol>
      <li>Something <a href="#">here</a></li>
      <li>Something <a href="#">here</a></li>
      <ul>
        <li>Something <a href="#">here</a></li>
        <li>Something <a href="#">here</a></li>
      </ul>
    </ol>

    <small>Small shit</small>
    <pre>Preformatted shit</pre>
    <code>Code stuff goes here.</code>

    <input type="text" placeholder="Text" />
    <input type="text" placeholder="Text" value="Text" />
    <input type="email" placeholder="Email" />
    <input type="email" placeholder="Email" value="Email" />
    <select name="select" id="select">
      <option value="">Option</option>
      <optgroup label="Groupa">
        <option value="">Option</option>
        <option value="">Option</option>
      </optgroup>
    </select>
  </div>
</template>

<script>
import "axios";

/* https://prismic.io/docs/vuejs/getting-started/prismic-nuxt */

export default {};
</script>

<style lang="scss"></style>
