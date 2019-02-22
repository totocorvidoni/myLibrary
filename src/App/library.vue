<template>
  <div id="library">
    <add-book id="add-book" @newBook="addToLibrary"></add-book>
    <div id="book-list">
      <book v-for="book in books" v-bind="book"></book>
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
      books: [
        {
          title: "A Title",
          author: "Some Author",
          genre: "Horror",
          rating: "★★",
          pages: 400,
          hasRead: true
        },
        {
          title: "Another Title",
          author: "Different Author",
          genre: "Mistery",
          rating: "★★★",
          pages: 823,
          hasRead: false
        },
        {
          title: "Yet Another One",
          author: "Me",
          genre: "Action",
          pages: 83,
          rating: "★★",
          hasRead: true
        },
        {
          title: "Best Title",
          author: "Pupe",
          genre: "Magical",
          pages: 777,
          rating: "★★★★★",
          hasRead: false
        }
      ]
    };
  },
  methods: {
    addToLibrary: function(book) {
      this.books.push(book);
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: beige;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
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
  padding: 2em 4em 2em 2em;
}

#title {
  position: fixed;
  bottom: 10px;
  right: 10px;
  color: #ffffff90;
  font-size: 3em;
  font-weight: 700;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  z-index: -100;
}
</style>
