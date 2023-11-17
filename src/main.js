import './style.css'
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router.js';
import Particles from "vue3-particles";

const app = createApp(App);

app.use(router);
app.use(Particles);



app.mount('#app');



