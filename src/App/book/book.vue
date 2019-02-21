<template>
  <div class="book">
    <header>
      <h1>{{ title }}</h1>
      <p>- {{ author }}</p>
    </header>
    <p class="category">
      <span>Genre:</span>
      {{ genre }}
    </p>
    <p class="category">
      <span>Pages:</span>
      {{ pages }}
    </p>
    <p class="category">
      <span class="stars">{{ rating }}</span>
    </p>
    <div class="has-read"></div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    author: String,
    genre: String,
    pages: Number,
    rating: String,
    hasRead: Boolean
  }
};
</script>

<style>
.book {
  position: relative;
  background: #fff;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.05);
  border-radius: 0.5em;
  margin: 1em 0 1em 0;
  padding: 1em;
  min-width: 480px;
}

.book header {
  margin-bottom: 1em;
}

.book header p {
  font-style: italic;
}

.book p {
  display: inline-block;
}

.category span {
  font-weight: 700;
}

.category:not(:first-of-type)::before {
  content: " - ";
  font-size: 1.2em;
}

.stars {
  color: goldenrod;
  font-size: 1.2em;
}

.has-read {
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-bottom: 40px solid transparent;
  border-right: 40px solid aquamarine;
  border-top: 40px solid aquamarine;
  border-left: 40px solid transparent;
  border-top-right-radius: 0.5em;
}
</style>
