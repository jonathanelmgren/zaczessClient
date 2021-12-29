import { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import APIService from '../../../shared/api/service/APIService'

export const ThankYouView = () => {
	const [thankYouRes, setThankYouRes] = useState<any>()
	const route: any = useRouteMatch()
	const orderId = route.params.id
	useEffect(() => {
		if (thankYouRes) return
		const getOrder = async () => {
			try {
				const res = await APIService.getOrder(orderId)
				setThankYouRes(res.data)
				var confirmationContainer = document.getElementById('my-confirmation-container')
				confirmationContainer!.innerHTML = res.data.html_snippet
				var scriptsTags = confirmationContainer!.getElementsByTagName('script')
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
		getOrder()
	}, [])
	return <div id='my-confirmation-container'></div>
}
