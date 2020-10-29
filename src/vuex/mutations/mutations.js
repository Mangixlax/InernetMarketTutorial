export default {
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
	},
	DECREMENT: (state, index) => {
		if (state.cart[index].quantity > 1) {
			state.cart[index].quantity--
		}			
	},
	INCREMENT: (state, index) => {
		state.cart[index].quantity++	
	}
}