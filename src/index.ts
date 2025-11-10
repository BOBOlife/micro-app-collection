import { createApp } from 'vue';
import App from './App.vue';
import WujieVue from 'wujie-vue3';
import './index.css';

const app = createApp(App)
app.use(WujieVue);
app.mount('#root');
