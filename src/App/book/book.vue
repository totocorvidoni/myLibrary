<template>
  <div class="book-area">
    <delete-button @delete="$emit('delete', id)"></delete-button>
    <div class="book" @click="$emit('toggleRead', id)">
      <header>
        <h1>{{ title }}</h1>
        <p>- {{ author }}</p>
      </header>
      <div class="book-info">
        <p class="category">
          <strong>Genre:</strong>
          {{ genre }}
        </p>
        <p class="category">
          <strong>Pages:</strong>
          {{ pages }}
        </p>
        <p class="category stars">{{ rating }}</p>
      </div>
      <read-status :isRead="isRead"></read-status>
    </div>
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
.book-area {
  position: relative;
}

.book {
  display: grid;
  grid-template-rows: auto 1fr;
  position: relative;
  background: #fff;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.05);
  border-radius: 0.5em;
  border: 3px solid #fff;
  cursor: pointer;
  min-height: 150px;
  padding: 1em 1em 1em 2em;
  transition: all 300ms cubic-bezier(0.41, 1.29, 0.55, 1.24);
}

.book:hover {
  border-bottom: 3px solid #4db6ac;
}

.book header {
  margin-bottom: 1em;
  padding-right: 1em;
  font-size: 0.8em;
}

.book header p {
  font-style: italic;
}

.book-info {
  align-self: end;
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
