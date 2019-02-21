<template>
  <div id="library">
    <book v-for="book in books" :key="book.id" v-bind="book"></book>
  </div>
</template>

<script>
import book from "./book/book.vue";
export default {
  components: {
    book
  },
  data() {
    return {
      books: [
        {
          id: 1,
          title: "A Title",
          author: "Some Author",
          genre: "Horror",
          rating: "★★",
          pages: 400,
          hasRead: true
        },
        {
          id: 2,
          title: "Another Title",
          author: "Different Author",
          genre: "Mistery",
          rating: "★★★",
          pages: 823,
          hasRead: false
        },
        {
          id: 3,
          title: "Yet Another One",
          author: "Me",
          genre: "Action",
          pages: 83,
          rating: "★★",
          hasRead: true
        },
        {
          id: 4,
          title: "Best Title",
          author: "Pupe",
          genre: "Magical",
          pages: 777,
          rating: "★★★★★",
          hasRead: false
        }
      ]
    };
  }
};
</script>

<style>
#library {
  margin: 1em;
}
</style>
