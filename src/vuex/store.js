import { createStore } from 'vuex'
import axios from 'axios'

export const store = createStore ({
	state: {
		products: [],
		cart: []
	},
	mutations: {
		SET_PRODUCTS_TO_STATE: (state, products) => {
			state.products = products;
		},
		SET_PRODUCT_TO_CART: (state, product) => {
						
			if (state.cart.length) {
				let isProductExist = false;
				state.cart.map(function (item) {
					if (item.article === product.article) {
						isProductExist = true;						
						item.quantity ++
						
					}
				})
				if (!isProductExist) {
					product.quantity = 1;					
					state.cart.push(product)
				}
			} else {
				product.quantity = 1;
				state.cart.push(product)
			}
						
			console.table(state.cart)
		},
		REMOVE_FROM_CART: (state, index) => {
			state.cart.splice(index, 1)
		}
	},
	actions: {
		fetchProductsFromApi({commit}) {
			return axios ('http://localhost:3000/products', {
				method: "GET"
			})
				.then((products) => {
					commit('SET_PRODUCTS_TO_STATE', products.data);
					return products;
				})
				.catch((error) => {
					console.log(error)
					return error;
				})
		},
		addProductToCart({commit}, product) {
			commit('SET_PRODUCT_TO_CART',product);
		},
		deleteProductFromCart({commit}, index) {
			commit('REMOVE_FROM_CART', index)
		}	
	},
	getters: {
		PRODUCTS(state){
			return state.products;
		},
		CART(state){
			return state.cart;
		}
	},

});

