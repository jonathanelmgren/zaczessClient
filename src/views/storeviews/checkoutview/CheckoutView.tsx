import { useContext, useEffect, useState } from 'react'
import APIService from '../../../shared/api/service/APIService'
import { KlarnaOrderContext } from '../../../shared/provider/KlarnaOrderProvider'

export const CheckoutView = () => {
	const [klarnaOrder, setKlarnaOrder] = useContext(KlarnaOrderContext)
	const [klarnaResponse, setKlarnaResponse] = useState<any>()

	useEffect(() => {
		if (klarnaResponse) return
		const createKlarnaOrder = async () => {
			try {
				const res = await APIService.createOrder(klarnaOrder)
				setKlarnaResponse(res.data)
				var checkoutContainer = document.getElementById('my-checkout-container')
				checkoutContainer!.innerHTML = res.data.html_snippet
				var scriptsTags = checkoutContainer!.getElementsByTagName('script')
				// This is necessary otherwise the scripts tags are not going to be evaluated
				for (var i = 0; i < scriptsTags.length; i++) {
					var parentNode = scriptsTags[i].parentNode
					var newScriptTag = document.createElement('script')
					newScriptTag.type = 'text/javascript'
					newScriptTag.text = scriptsTags[i].text
					parentNode!.removeChild(scriptsTags[i])
					parentNode!.appendChild(newScriptTag)
				}
			} catch (e) {
				console.log(e)
			}
		}
		createKlarnaOrder()
	}, [klarnaOrder])

	return (
		<div>
			<div id='my-checkout-container'></div>
		</div>
	)
}
