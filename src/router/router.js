import { createWebHistory, createRouter } from "vue-router";
import vCatalog from '../components/v-catalog.vue'
import vCart from '../components/v-cart'

const routes =  [
	{
		path: '/',
		name: 'catalog',
		component: vCatalog
	},
	{
		path: '/cart',
		name: 'cart',
		component: vCart,
		props: true
	}		
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;