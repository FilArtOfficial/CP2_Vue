import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Users from '../views/Users.vue';
import Profile from '../views/Profile.vue';

function requireAuth(to, from, next) {
  const token = localStorage.getItem('token');
  if (!token) {
    next('/login');
  } else {
    next();
  }
}

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/login', component: Login },
  { path: '/users', component: Users },
  { path: '/profile', component: Profile, beforeEnter: requireAuth },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
