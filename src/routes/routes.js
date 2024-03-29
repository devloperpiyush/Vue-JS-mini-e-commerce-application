import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import ProductDetails from '../components/ProductDetails.vue';
import Cart from '../components/Cart.vue';
import Login from '../components/Login.vue';
import { useUserStore } from '../store/user.js';

const routes = [
  { path: '/', component: Home },
  { path: '/product-details', component: ProductDetails, meta: { requiresAuth: true } },
  { path: '/cart', component: Cart, meta: { requiresAuth: true } },
  { path: '/login', component: Login }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const store = useUserStore();
    const isAuthenticated = store.isLoggedIn;
    if (!isAuthenticated) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
