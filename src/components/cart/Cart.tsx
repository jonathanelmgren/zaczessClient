import { useSelector, useDispatch } from 'react-redux'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { removeFromCart } from '../../redux/actions/cartActions'
import { addQuantity, subQuantity } from '../../redux/actions/cartActions'

import { CartToggleContext } from '../../shared/provider/CartToggleProvider'

import './Cart.scss'
import RoutingPath from '../../routes/RoutingPath'

export const Cart = () => {
	const cart = useSelector((state: any) => state.cart)
	const dispatch = useDispatch()
	const [isShoppingBagOpen, setIsShoppingBagOpen] = useContext(CartToggleContext)
	const history = useHistory()

	let totalPrice: number = 0
	let amountOfItems = 0

	const fetchAmountOfItemsInCart = () => {
		cart.cartItems.map((x: any) => {
			return (amountOfItems = amountOfItems + 1 * x.qty)
		})
	}

	const renderAttr = (x: any) => {
		const keys = Object.keys(x).filter((x: any) => x !== 'id' && x !== 'stock' && x !== 'featuredImage' && x !== 'price' && x !== 'qty' && x !== 'title')
		console.log(keys)
		return (
			<div className='attributes'>
				{keys.map((key: any) =>
					x[key] === undefined ? null : (
						<div key={Math.random()} className='attr'>
							<span className='attributeTitle'>{key}</span>
							<br />
							<div className='attribute'>
								<span>{x[key]}</span>
							</div>
						</div>
					)
				)}
			</div>
		)
	}

	const displayCartItems = () => {
		return cart.cartItems.map((x: any) => {
			let img = `http://localhost:3001/${x.featuredImage}`
			if (!x.featuredImage) img = 'https://picsum.photos/300/300'
			totalPrice = totalPrice + x.price * x.qty
			amountOfItems = amountOfItems * x.qty
			return (
				<div key={x._id} className='cartItem'>
					<img className='itemImage' src={img} alt='prdkt img' />
					<h5 className='itemTitle'>{x.title}</h5>
					<span className='itemPrice'>{x.price}:-</span>
					{renderAttr(x)}
					<div className='itemQuantity'>
						<span className='attributeTitle'>Quantity</span>
						<br />
						<div className='quantityWrapper'>
							<button className='minus' onClick={() => dispatch(subQuantity(x.id))}>
								-
							</button>
							<span className='attribute qty'>{x.qty}</span>
							<button className='plus' onClick={() => dispatch(addQuantity(x.id))}>
								+
							</button>
						</div>
					</div>
					<div className='removeItem'>
						<span className='delete' onClick={() => dispatch(removeFromCart(x.id))}>
							X
						</span>
					</div>
					<div className='itemDivider'>
						<hr />
					</div>
				</div>
			)
		})
	}

	const navigateToCheckout = () => {
		history.push(RoutingPath.checkoutView)
		setIsShoppingBagOpen(false)
	}

	const displayCart = () => {
		return (
			<>
				<div className={isShoppingBagOpen ? 'cartWrapper open' : 'cartWrapper'}>
					{fetchAmountOfItemsInCart()}
					<div className='cartHeader'>
						<h4>
							Cart <span>({amountOfItems})</span>
						</h4>
						<span onClick={() => setIsShoppingBagOpen(false)}>X</span>
					</div>
					<div className='cartBody'>{amountOfItems !== 0 ? displayCartItems() : <h4>Cart is empty</h4>}</div>
					<div className='cartFooter'>
						<div className='cartTotal'>
							<span>Totales: </span>
							<span>{totalPrice}:-</span>
						</div>
						<button onClick={() => navigateToCheckout()}>CHECKOUT</button>
						<div>
							<span>Alltid fri frakt</span>
							<span>Leverans inom 1-3 arbetsdagar</span>
							<span>Öppetköp 30 dagar</span>
						</div>
					</div>
				</div>
				{isShoppingBagOpen && <div className='overlay' onClick={() => setIsShoppingBagOpen(false)} />}
			</>
		)
	}

	return displayCart()
}
