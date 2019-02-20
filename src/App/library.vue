<template>
  <div>
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
          title: "a title",
          author: "some author",
          genre: "horror",
          pages: 400,
          hasRead: true
        },
        {
          id: 2,
          title: "another title",
          author: "diferent author",
          genre: "mistery",
          pages: 823,
          hasRead: false
        },
        {
          id: 3,
          title: "yet another one",
          author: "me",
          genre: "action",
          pages: 83,
          hasRead: true
        },
        {
          id: 4,
          title: "best title",
          author: "pupe",
          genre: "magical",
          pages: 777,
          hasRead: false
        }
      ]
    };
  }
};
</script>

<style scoped>
#library {
  background: grey;
}
</style>
