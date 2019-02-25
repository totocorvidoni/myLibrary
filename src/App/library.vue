<template>
  <div id="library">
    <add-book id="add-book" @newBook="addToLibrary"></add-book>
    <div id="book-list">
      <book
        v-for="book in books"
        v-bind="book"
        :key="book.id"
        @toggleRead="onToggleRead"
        @delete="onDelete"
      ></book>
    </div>
    <h1 id="title">MY LIBRARY</h1>
  </div>
</template>

<script>
import book from "./book/book.vue";
import addBook from "./addBook/addBook.vue";
export default {
  components: {
    book,
    addBook
  },
  data() {
    return {
      idCount: 1,
      books: []
    };
  },
  methods: {
    saveLibrary: function() {
      localStorage.setItem("books", JSON.stringify(this.books));
      localStorage.setItem("idCount", this.idCount);
    },
    addToLibrary: function(book) {
      book.id = this.idCount;
      this.idCount += 1;
      this.books.push(book);
      this.saveLibrary();
    },
    onToggleRead: function(bookId) {
      const book = this.books.find(aBook => aBook.id === bookId);
      book.isRead = !book.isRead;
      this.saveLibrary();
    },
    onDelete: function(bookId) {
      const bookIndex = this.books.findIndex(aBook => aBook.id === bookId);
      this.books.splice(bookIndex, 1);
      this.saveLibrary();
    }
  },
  mounted: function() {
    if (localStorage.hasOwnProperty("books")) {
      this.books = JSON.parse(localStorage.getItem("books"));
      this.idCount = parseInt(localStorage.getItem("idCount"), 10);
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: beige;
}

#app {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  width: 100vw;
}

#add-book {
  position: fixed;
  background: #36434f;
  box-shadow: 5px 0 5px rgba(0, 0, 0, 0.2);
  min-width: 75px;
  height: 100%;
  z-index: 100;
}

#book-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 2em;
  width: calc(100vw - 75px);
  margin-left: 75px;
  padding: 3em 4em 2em 3em;
}

#title {
  position: fixed;
  bottom: 15px;
  right: 15px;
  color: #ffffff90;
  font-size: 3em;
  font-weight: 700;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  z-index: -100;
}
</style>
