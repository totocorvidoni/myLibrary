<template>
  <div class="book">
    <header>
      <h1>{{ title }}</h1>
      <p>{{ author }}</p>
    </header>
    <p>{{ genre }}</p>
    <p>{{ pages }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    author: String,
    genre: String,
    pages: Number,
    hasRead: Boolean
  }
};
</script>

<style scoped>
</style>
