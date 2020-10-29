export default {	
	addProductToCart({commit}, product) {
		commit('SET_PRODUCT_TO_CART',product);
	},
	deleteProductFromCart({commit}, index) {
		commit('REMOVE_FROM_CART', index)
	},
	decrementCartItem({commit}, index) {
		commit('DECREMENT', index)
	},
	incrementCartItem({commit}, index) {
		commit('INCREMENT', index)
	}
}