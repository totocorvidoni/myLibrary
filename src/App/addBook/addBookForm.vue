<template>
  <div class="form-wrapper">
    <button class="close-form tiny-close" title="Cancel New Book" @click="$emit('toggle-bar')">X</button>
    <form class="new-book-form" @submit.prevent="onSubmit">
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
        <option value="Other">Other</option>
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
    <button
      class="close-form large-close"
      title="Cancel New Book"
      @click="$emit('toggle-bar')"
    >Close Panel</button>
  </div>
</template>

<script>
export default {
  name: "addBookForm",
  data() {
    return {
      title: "",
      author: "",
      genre: "",
      pages: "",
      rating: "",
      isRead: false
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
      this.$emit("toggle-bar");
    },
    resetForm: function() {
      this.title = "";
      this.author = "";
      this.genre = "";
      this.pages = "";
      this.rating = "";
      this.isRead = false;
    }
  },
};
</script>

<style>
.form-wrapper {
  background: #36434f;
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
  font-size: 0.8em;
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
  width: 50px;
}

.new-book-form input[type="checkbox"] {
  background: #fff;
  justify-self: center;
  align-self: center;
  transform: scale(2);
  margin-right: 5px;
  margin-top: 5px;
  width: auto;
  height: auto;
}

#submit-book {
  align-self: end;
  background-color: #009688;
  color: #fff;
  font-size: 1em;
  font-weight: 700;
}

#submit-book:hover {
  background-color: #4db6ac;
  transform: scale(1.05);
}

.close-form {
  position: absolute;
  background: rgb(220, 20, 60);
  border: none;
  color: #fff;
  font-weight: 700;
  padding: 0.5em;
}

.large-close {
  bottom: 0;
  font-size: 1em;
  width: 100%;
}

.large-close:hover {
  background: red;
  padding: 1em 0.5em;
}

.tiny-close {
  left: 100%;
  border-bottom-right-radius: 0.5em;
}

.tiny-close:hover {
  background: red;
  transform: scale(1.25) translate(10%, 10%);
}

button,
input[type="submit"] {
  cursor: pointer;
  transition: all 300ms cubic-bezier(0.41, 1.29, 0.55, 1.24);
}
</style>
