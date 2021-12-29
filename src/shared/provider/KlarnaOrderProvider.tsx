import React, { useState, createContext, useEffect } from 'react'
import { useSelector } from 'react-redux'

export const KlarnaOrderContext = createContext<any>(null)

export const KlarnaOrderProvider = (props: { children?: React.ReactChild }) => {
	const [klarnaOrder, setKlarnaOrder] = useState<any>({
		locale: 'sv-SE',
		purchase_country: 'SE',
		purchase_currency: 'SEK',
		order_amount: 0,
		order_tax_amount: 0,
		order_lines: [],
		merchant_urls: {
			terms: 'https://www.example.com/terms.html',
			checkout: 'http://localhost:3000/kassan',
			confirmation: 'http://localhost:3000/thankyou/{checkout.order.id}',
			push: 'https://www.example.com/api/push',
		},
	})
	const { children } = props
	const cart = useSelector((state: any) => state.cart)

	useEffect(() => {
		const tmpArr: any = []
		let totalPrice = 0
		for (const cartItem of cart.cartItems) {
			const itemTotalPrice = cartItem.price * cartItem.qty * 100
			totalPrice = totalPrice + cartItem.price * cartItem.qty * 100
			tmpArr.push({ name: cartItem.title, quantity: cartItem.qty, unit_price: cartItem.price * 100, tax_rate: 2500, total_amount: itemTotalPrice, total_tax_amount: itemTotalPrice* 0.2 })
		}
		setKlarnaOrder((prev: any) => ({ ...prev, order_lines: tmpArr, order_amount: totalPrice, order_tax_amount: totalPrice * 0.2 }))
	}, [cart])

	return <KlarnaOrderContext.Provider value={[klarnaOrder, setKlarnaOrder]}>{children}</KlarnaOrderContext.Provider>
}
