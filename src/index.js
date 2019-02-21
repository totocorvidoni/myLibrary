import Vue from 'vue';
import './style.css';
import library from './App/library.vue';

const vm = new Vue({
  el: '#app',
  components: {
    library,
  },
});
