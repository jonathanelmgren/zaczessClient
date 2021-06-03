import Axios from 'axios'

const API = Axios.create({
	baseURL: 'http://localhost:3001',
	headers: { 'Content-Type': 'application/json' }
})

export default API