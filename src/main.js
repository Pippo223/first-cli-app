import { createApp } from 'vue';

import App from './App.vue';

import contact from './components/contact.vue';

const app = createApp(App)
app.component('friend-contact', contact)
app.mount('#app');

  