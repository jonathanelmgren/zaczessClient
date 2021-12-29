import Axios from 'axios'

const API_URL: any = process.env.REACT_APP_API_URL

const API = Axios.create({
	baseURL: API_URL,
	headers: { 'Content-Type': 'application/json' }
})

export default API