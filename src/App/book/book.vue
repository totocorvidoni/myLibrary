<template>
  <div class="book" @click="$emit('onToggleRead', id)">
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
      <p class="category stars">{{ rating }}</p>
    </div>
    <read-status :isRead="isRead"></read-status>
    <delete-button></delete-button>
  </div>
</template>

<script>
import readStatus from "./book-components/read-status.vue";
import deleteButton from "./book-components/delete-book.vue";
export default {
  components: {
    readStatus,
    deleteButton
  },
  props: {
    id: Number,
    title: String,
    author: String,
    genre: String,
    pages: Number,
    rating: String,
    isRead: Boolean
  }
};
</script>

<style>
.book {
  position: relative;
  background: #fff;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.05);
  border-radius: 0.5em;
  border: 3px solid #fff;
  cursor: pointer;
  padding: 1em 1em 1em 2em;
  transition: all 300ms cubic-bezier(0.41, 1.29, 0.55, 1.24);
}

.book:hover {
  border-bottom: 3px solid #4db6ac;
}

.book header {
  margin-bottom: 1em;
  padding-left: 1em;
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
  padding: 3px 6px;
  font-size: 1.2em;
  margin-left: auto;
  border-bottom-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
}
</style>
