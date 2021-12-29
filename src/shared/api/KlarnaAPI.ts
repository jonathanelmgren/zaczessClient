import Axios from 'axios'

const KlarnaAPI = Axios.create({
	baseURL: 'https://api.playground.klarna.com/checkout/v3/',
	headers: { 'Content-Type': 'application/json' },
    auth: {
        username: 'PK34732_725e50fcfdff',
        password: '2Gu1K34Rm6zvT7lB'
    }
})

export default KlarnaAPI