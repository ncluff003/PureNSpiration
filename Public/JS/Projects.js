import { createApp } from 'vue';
import myApp from './Vue-Projects-App/Vue-App.vue';

if (document.getElementById('vueApp')) {
  createApp(myApp).mount('#vueApp');
}
