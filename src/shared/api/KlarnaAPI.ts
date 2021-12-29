import Axios from 'axios'

const API_USER: any = process.env.KLARNA_API_USERNAME
const API_PASS: any = process.env.KLARNA_API_PASSWORD

const KlarnaAPI = Axios.create({
	baseURL: 'https://api.playground.klarna.com/checkout/v3/',
	headers: { 'Content-Type': 'application/json' },
    auth: {
        username: API_USER,
        password: API_PASS
    }
})

export default KlarnaAPI