import { createApp } from 'vue';

import App from './App.vue';

import contact from './components/contact.vue';

import friend from './components/newFriend';

const app = createApp(App)
app.component('friend-contact', contact)
app.component('new-friend', friend)
app.mount('#app');

  