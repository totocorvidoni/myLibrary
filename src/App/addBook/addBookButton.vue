<template>
  <div>
    <button class="new-book-button" title="New Book" @click="$emit('toggle-bar')">+</button>
  </div>
</template>

<script>
export default {
  name: "AddBookButton",
  data() {
    return {
      title: "",
      author: "",
      genre: "",
      pages: "",
      rating: "",
      isRead: false,
      addingBook: false
    };
  }
};
</script>

<style>
.new-book-button,
.new-book-form {
  color: #fff;
  font-weight: 700;
}

.new-book-button {
  background: #009688;
  border: none;
  font-size: 2.5em;
  padding: 0.5rem 0;
  width: 100%;
  height: 100%;
  transition: transform 150ms ease-out;
}

.new-book-button:hover {
  transform: scale(1.2) translateX(10%);
}
</style>
