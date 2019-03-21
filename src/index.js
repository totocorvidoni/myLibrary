import Vue from 'vue';
import library from './App/library.vue';

const vm = new Vue({
  el: '#app',
  data: {
    message: 'this is a test',
  },
  components: {
    library,
  },
});
