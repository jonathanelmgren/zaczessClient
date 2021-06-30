import React, { useState, createContext } from 'react'

export const CartToggleContext = createContext<any>(null)

export const CartToggleProvider = (props: { children?: React.ReactChild }) => {
	const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
	const { children } = props

	return (
		<CartToggleContext.Provider value={[isCartOpen, setIsCartOpen]}>
			{children}
		</CartToggleContext.Provider>
	)
}