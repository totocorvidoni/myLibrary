<template>
  <div>
    <button
      class="new-book-button"
      v-if="!addingBook"
      @click="addingBook = !addingBook"
      title="New Book"
    >+</button>
    <form class="new-book-form" v-else @submit.prevent="onSubmit">
      <label for="title">Title</label>
      <input type="text" name="title" v-model="title" required>
      <label for="author">Author</label>
      <input type="text" name="author" v-model="author" required>
      <label for="genre">Genre</label>
      <select name="genre" v-model="genre" required>
        <option disabled value>Pick one</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Western">Western</option>
        <option value="Romance">Romance</option>
        <option value="Thriller">Thriller</option>
        <option value="Mystery">Mystery</option>
      </select>
      <label for="pages">Pages</label>
      <input type="number" min="1" v-model="pages" required>
      <div class="small-field">
        <label for="rating">Stars:</label>
        <select name="rating" v-model="rating" required>
          <option disabled value>-</option>
          <option value="★">1</option>
          <option value="★★">2</option>
          <option value="★★★">3</option>
          <option value="★★★★">4</option>
          <option value="★★★★★">5</option>
        </select>
      </div>
      <div class="small-field">
        <label for="is-read">Already read?</label>
        <input type="checkbox" value="true" name="is-read" v-model="isRead">
      </div>
      <input id="submit-book" type="submit" name="submit" value="Add Book">
    </form>
  </div>
</template>

<script>
export default {
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

.new-book-form {
  display: grid;
  grid-gap: 5px;
  padding: 1em;
  width: 200px;
}

.new-book-form > input,
.new-book-form > select,
.small-field {
  margin-bottom: 10px;
}

.small-field {
  display: flex;
  justify-content: space-between;
}

.new-book-form label {
  font-size: 1em;
}

.new-book-form input,
.new-book-form select {
  background: #fff;
  border: none;
  border-radius: 0.2em;
  height: 2em;
  width: 100%;
  padding: 0 0.5em;
}

.new-book-form select[name="rating"] {
  width: 40px;
}

.new-book-form input[type="checkbox"] {
  justify-self: center;
  align-self: center;
  width: auto;
  height: auto;
  transform: scale(2);
  margin-right: 5px;
  margin-top: 5px;
}

#submit-book {
  align-self: end;
  background-color: #009688;
  color: #fff;
  font-size: 1em;
  font-weight: 700;
}
</style>
