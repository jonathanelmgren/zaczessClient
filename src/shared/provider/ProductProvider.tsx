import React, { useState, createContext } from 'react'

export const ProductsContext = createContext<any>(null)

export const ProductsProvider = (props: { children?: React.ReactChild }) => {
	const [products, setProducts] = useState<any>('')
	const { children } = props

	return (
		<ProductsContext.Provider value={[products, setProducts]}>
			{children}
		</ProductsContext.Provider>
	)
}