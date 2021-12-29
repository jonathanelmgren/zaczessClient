import http from '../KlarnaAPI'

const createOrder = (data: any) => {
	return http.post('/', data)
}

export default {
	createOrder
}