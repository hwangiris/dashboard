import { createApp } from 'vue';

import emitter from '@/script/mitt';

import App from './App.vue';
import router from './router';

const app = createApp(App);
app.config.globalProperties.$emitter = emitter;

app.use(router);
app.mount('#app');
