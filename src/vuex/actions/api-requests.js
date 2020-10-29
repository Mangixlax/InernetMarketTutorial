import axios from 'axios'
export default {
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
	}
}