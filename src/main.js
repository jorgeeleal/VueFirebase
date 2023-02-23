import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
// -- --------------------------------------- Router
import router from './router';

// -- --------------------------------------- Pinia
import { createPinia } from 'pinia';

createApp(App).use(router).use(createPinia()).mount('#app')
