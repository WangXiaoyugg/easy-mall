import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/cart', component: '@/pages/cart/index' },
    { path: '/order', component: '@/pages/order/index' },
    { path: '/user', component: '@/pages/user/index' },
  ],
});
