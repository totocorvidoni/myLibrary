<template>
  <form action="/" @submit.prevent="onSubmit">
    <label for="title">Title</label>
    <input type="text" name="title" v-model="title" required>
    <label for="author">Author</label>
    <input type="text" name="author" v-model="author" required>
    <label for="genre">Genre</label>
    <select name="genre" v-model="genre" required>
      <option disabled value>Expand</option>
      <option value="Fantasy">Fantasy</option>
      <option value="Western">Western</option>
      <option value="Romance">Romance</option>
      <option value="Thriller">Thriller</option>
      <option value="Mystery">Mystery</option>
    </select>
    <label for="pages">Pages</label>
    <input type="number" min="1" v-model="pages" required>
    <label for="rating">How many stars?</label>
    <select name="rating" v-model="rating" required>
      <option disabled value>Expand</option>
      <option value="★">1</option>
      <option value="★★">2</option>
      <option value="★★★">3</option>
      <option value="★★★★">4</option>
      <option value="★★★★★">5</option>
    </select>
    <label for="has-read">Have your read it?</label>
    <input type="checkbox" value="true" name="has-read" v-model="hasRead">
    <input type="submit" name="submit" value="Add Book">
  </form>
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
      hasRead: false
    };
  },
  methods: {
    onSubmit: function(event) {
      const book = {
        title: this.title,
        author: this.author,
        genre: this.genre,
        pages: parseInt(this.pages, 10),
        rating: this.rating,
        hasRead: this.hasRead
      };
      this.$emit("newBook", book);
      event.target.reset();
    }
  }
};
</script>

<style>
</style>
