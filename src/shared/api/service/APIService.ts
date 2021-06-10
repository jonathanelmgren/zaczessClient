import http from '../API'

const getAllProducts = () => {
	return http.get('/products')
}
const createProduct = (formData: any) => {
	return http.post('/product',
		formData
	)
}
const changeFtdImg = (productId: any, formData: any) => {
	return http.put(`/product/${productId}/ftdimg`,
		formData
	)
}
const changeMltImg = (productId: any, formData: any) => {
	return http.post(`/product/${productId}/mltimg`,
		formData
	)
}

export default {
	getAllProducts,
	createProduct,
	changeFtdImg,
	changeMltImg,
}