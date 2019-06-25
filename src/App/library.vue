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
      <div class="container-box big-box">
        <h1>You have no books in your library</h1>
        <p>Add some by clicking the bar on the left.</p>
      </div>
      <div class="container-box">
        <p>This is an app to organize your library, it will fulfill all of you book related expectations as long as you only need to:</p>
      </div>
      <ul class="container-box">
        <li>
          <strong>Add</strong> books.
        </li>
        <li>
          <strong>Remove</strong> books.
        </li>
        <li>
          <strong>Mark</strong> them as read.
        </li>
      </ul>
      <p class="container-box">
        If you are the sort of person who expects persistence in your library, we have good news for you, your books will be
        <strong>automatically saved</strong> every time you make a change. Just keep in mind that the save is local to your browser, meaning that if you use a different computer, or browser, or clean your history or pretty much anything releatad to deleting stuff, you
        <strong>will</strong> lose all of your entries.
      </p>
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
    <footer>
      <p>
        Made by
        <strong>
          <a href="https://github.com/totocorvidoni">@TotoCorvidoni</a>
        </strong>
      </p>
    </footer>
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
  color: #36434f;
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  width: 100vw;
}

#library {
  display: grid;
  align-items: start;
  padding-left: 50px;
  height: 100%;
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
}

.container-box {
  background: #fff;
  border-radius: 0.5em;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.05);
  margin: 0.5em;
  max-width: 40em;
  padding: 1em 1.5em;
  text-align: justify;
}

ul.container-box {
  list-style-type: none;
  margin-left: 1em;
}

.big-box {
  font-size: 1.3em;
  margin: 1em;
  text-align: center;
}

footer {
  align-self: end;
  text-align: center;
  padding-bottom: 1em;
}

footer a,
footer a:visited {
  text-decoration: none;
  color: #00bcd4;
}

footer a:hover {
  color: #81d4fa;
}

footer a:active {
  color: #fbc02d;
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
