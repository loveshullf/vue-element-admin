import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '@/page/login';
import layout from '@/page/layout';
Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
      {
        path: '/login',
        component: login
      },
      {
        path: '/',
        component: layout
      }
    ]
  });
  
  export default router;