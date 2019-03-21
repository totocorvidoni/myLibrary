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
  },
  methods: {
    onSubmit: function() {
      const book = {
        title: this.title,
        author: this.author,
        genre: this.genre,
        pages: parseInt(this.pages, 10),
        rating: this.rating,
        isRead: this.isRead
      };
      this.$emit("newBook", book);
      this.resetForm();
      this.addingBook = false;
    },
    resetForm: function() {
      (this.title = ""),
        (this.author = ""),
        (this.genre = ""),
        (this.pages = ""),
        (this.rating = ""),
        (this.isRead = false);
    }
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
}

.new-book-button:hover {
  background-color: #4db6ac;
}
</style>
