<template>
  <div id="library">
    <transition name="slide" mode="out-in">
      <component
        id="add-book"
        :is="currentBarComponent"
        @newBook="addToLibrary"
        @toggle-bar="onToggleBar"
      ></component>
    </transition>
    <div v-if="noBooks" id="no-books">
      <div class="wrapper">
        <h1>You have no books in your library.</h1>
        <p>Add some by clicking the bar on the left.</p>
      </div>
    </div>
    <div v-else id="book-list">
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
import addBookForm from "./addBook/addBookForm.vue";
import addBookButton from "./addBook/addBookButton.vue";
export default {
  name: "library",
  components: {
    book,
    addBookForm,
    addBookButton
  },
  data() {
    return {
      idCount: 1,
      books: [],
      currentBarComponent: "addBookButton"
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
    onToggleBar: function() {
      if (this.currentBarComponent === "addBookButton") {
        this.currentBarComponent = "addBookForm";
      } else {
        this.currentBarComponent = "addBookButton";
      }
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
  },
  computed: {
    noBooks: function() {
      return this.books.length === 0 ? true : false;
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
  background: linear-gradient(to bottom right, #fafcde, #e3ffdd);
}

#app {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  width: 100vw;
}

#library {
  padding-left: 50px;
}

#add-book {
  position: fixed;
  left: 0;
  min-width: 50px;
  height: 100%;
  z-index: 100;
}

#book-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 2em;
  width: calc(100vw - 50px);
  padding: 3em 4em 2em 3em;
}

#no-books {
  display: grid;
  place-items: center;
  justify-content: center;
  padding-top: 3em;
}

#no-books .wrapper {
  background: #fff;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.05);
  border-radius: 0.5em;
  padding: 2em;
  text-align: center;
}

#no-books h1 {
  margin-bottom: 0.5em;
}

#no-books p {
  font-size: 1.3em;
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

.slide-enter-active,
.slide-leave-active {
  transition: all 150ms ease-out;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
