<template>
  <div class="book">
    <header>
      <h1>{{ title }}</h1>
      <p>- {{ author }}</p>
    </header>
    <div class="book-info">
      <p class="category">
        <span>Genre:</span>
        {{ genre }}
      </p>
      <p class="category">
        <span>Pages:</span>
        {{ pages }}
      </p>
      <p class="category stars">
        <span>{{ rating }}</span>
      </p>
      <div class="has-read"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
  padding: 1em 2em;
  transition: all 1s ease;
}

.book header {
  margin-bottom: 1em;
}

.book header p {
  font-style: italic;
}

.category span {
  font-weight: 700;
}

.book-info {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1em;
  grid-template-columns: auto auto 1fr;
  justify-items: start;
  align-items: center;
}

.stars {
  justify-self: end;
  color: #fff;
  background: goldenrod;
  padding: 2px 4px;
  font-size: 1.2em;
  margin-left: auto;
  border-bottom-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
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
