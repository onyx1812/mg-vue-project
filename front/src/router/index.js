import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about-us',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/games',
    name: 'Games',
    component: () => import('../views/Games.vue'),
  },
  {
    path: '/game',
    name: 'Game',
    component: () => import('../views/Game.vue'),
  },
  {
    path: '/bonus',
    name: 'Bonus',
    component: () => import('../views/Bonus.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
  },
  {
    path: '/balance',
    name: 'Balance',
    component: () => import('../views/Balance.vue'),
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue'),
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts.vue'),
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import('../views/FAQ.vue'),
  },
  {
    path: '/roulette',
    name: 'Roulette',
    component: () => import('../views/Roulette.vue'),
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.afterEach((to, from) => {
  document.getElementById('app').classList = to.name;
})

export default router;
