import http from '../API'

const getAllProducts = () => {
	return http.get('/products')
}
const getProductByID = (id: string) => {
	return http.get(`/product/${id}`)
}
const createProduct = (formData: any) => {
	return http.post('/product', formData)
}
const changeFtdImg = (productId: any, formData: any) => {
	return http.put(`/product/${productId}/ftdimg`, formData)
}
const changeMltImg = (productId: any, formData: any) => {
	return http.post(`/product/${productId}/mltimg`, formData)
}
const createVariation = (productId: any, formData: any) => {
	return http.post(`/product/${productId}/variation`, formData)
}
const createOrder = (data: any) => {
	return http.post(`/order/add`, data)
}
const getOrder = (orderid: any) => {
	return http.get(`/order/get/${orderid}`)
}
const getAllCategories = () => {
	return http.get(`/categories`)
}

export default {
	getAllProducts,
	createProduct,
	changeFtdImg,
	changeMltImg,
	getProductByID,
	createVariation,
	getAllCategories,
	createOrder,
	getOrder
}
