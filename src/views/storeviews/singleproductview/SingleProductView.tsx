import './SingleProductView.scss'

import { useLocation } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { useDispatch } from 'react-redux'

import { addToCart } from '../../../redux/actions/cartActions'
import { CartToggleContext } from '../../../shared/provider/CartToggleProvider'

export const SingleProductView = () => {
	const API_URL: any = process.env.REACT_APP_API_URL
	const [, setIsShoppingBagOpen] = useContext(CartToggleContext)
	const [qty, setQty] = useState(1)
	const location = useLocation()
	const product: any = location.state
	const [productVariant, setProductVariant] = useState<any>({
		price: product.price,
		title: product.title,
		stock: undefined,
		id: 0,
		featuredImage: product.featuredImage,
		qty: '0',
	})
	const dispatch = useDispatch()

	let img = `${API_URL}${product.featuredImage}`
	if (!product.featuredImage) img = 'https://picsum.photos/1300/1900'

	const checkIfVariationIsActive = (variation: any, key: any) => {
		let productVar
		if (variation === productVariant[`${key}`]) productVar = productVariant[`${key}`]

		let isActive
		if (productVar === variation) {
			isActive = 'is-active'
		} else {
			isActive = productVar
		}
		return isActive
	}

	const getVariations = () => {
		let variations: any = {}
		return (
			<div className='variants'>
				{product.variations.map((variation: any) => {
					const keys = Object.keys(variation).filter((x: any) => x !== '_id' && x !== 'stock')
					return keys.map((key: any) => {
						const variant = [...new Set(product.variations.map((a: any) => a[`${key}`]))]

						if (key in variations) return null
						variations[`${key}`] = variant
						return (
							<div>
								{variations[`${key}`].map((x: any) => {
									const isActive = checkIfVariationIsActive(x, key)
									return (
										<span
											onClick={() => {
												setProductVariant({ ...productVariant, [`${key}`]: x })
												productVariant[`${key}`] = x
												updateStock(keys)
											}}
											className={isActive}
										>
											{x}
										</span>
									)
								})}
							</div>
						)
					})
				})}
			</div>
		)
	}

	const updateStock = (keys: any) => {
		const test: any = {}
		const test2: any = []
		for (const key of keys) {
			test[key] = productVariant[key]
		}
		product.variations.map((x: any) => {
			const obj: any = {}
			for (const key of keys) {
				obj[key] = x[key]
			}
			test2.push(obj)
		})
		const variation = test2.findIndex((e: any) => JSON.stringify(e) === JSON.stringify(test))
		setProductVariant({ ...productVariant, stock: product.variations[variation]?.stock, id: product.variations[variation]?._id })
	}

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	useEffect(() => {
		const stringQty = qty.toString()
		setProductVariant({ ...productVariant, qty: stringQty })
	}, [qty])

	const addVariationToCart = () => {
		const qty = parseInt(productVariant.qty)
		if (productVariant.stock !== 0 && qty <= productVariant.stock) {
			dispatch(addToCart(productVariant))
			setIsShoppingBagOpen(true)
		}
	}

	const incrementQty = () => {
		if (qty < productVariant.stock) setQty(qty + 1)
	}
	const decrementQty = () => {
		if (qty > 1) setQty(qty - 1)
	}

	const checkStock = (stock: any) => {
		if (stock === undefined) return <span className='stock'>Pick variant</span>
		if (stock === 0) return <span className='stock'>Out of stock</span>
		return <span className='stock'>Stock: {productVariant.stock}</span>
	}

	return (
		<div className='singleProductViewWrapper'>
			<div className='leftColumn'>
				<img src={img} alt='err' />
			</div>
			<div className='rightColumn'>
				<div className='productInfo'>
					<h2>{product.title}</h2>
					<p>{product.description}</p>
				</div>
				<div className='productMeta'>
					<span className='price'>{product.price} :-</span>
					{getVariations()}
				</div>
				<div className='productAddToCart'>
					<div className='quantityWrapper'>
						<button className='minus' onClick={() => decrementQty()}>
							-
						</button>
						<span className='qty'>{qty}</span>
						<button className='plus' onClick={() => incrementQty()}>
							+
						</button>
					</div>
					<button onClick={() => addVariationToCart()}>Add to cart</button>
				</div>
				{checkStock(productVariant.stock)}
			</div>
		</div>
	)
}
