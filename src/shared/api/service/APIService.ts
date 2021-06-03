import http from '../API'

const getAllProducts = () => {
	return http.get('/products')
}
const createProduct = (formData: any) => {
	return http.post('/product', 
		formData
	)
}

export default {
	getAllProducts,
	createProduct
}