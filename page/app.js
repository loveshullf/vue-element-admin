import { sync } from 'vuex-router-sync';
import store from 'store/app';
import router from 'router';
import App from 'app';
import app from './app.vue';
sync(store, router);

export default App.init({
  ...app,
  router,
  store
});
