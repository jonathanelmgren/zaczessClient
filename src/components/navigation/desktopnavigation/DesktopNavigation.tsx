import { useHistory, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { useSelector } from "react-redux"


import { CartToggleContext } from '../../../shared/provider/CartToggleProvider'
import { Cart } from '../../cart/Cart'

import RoutingPath from '../../../routes/RoutingPath'
import cartLogo from '../../../images/navigation/cart.svg'
import searchLogo from '../../../images/navigation/search.svg'
import './DesktopNavigation.scss'

export const DesktopNavigation = (props: { children?: React.ReactChild }) => {
    const cart = useSelector((state: any) => state.cart);

    const history = useHistory()
    const [, setIsShoppingBagOpen] = useContext(CartToggleContext)

    let amountOfItems = 0

    const fetchAmountOfItemsInCart = () => {
        cart.cartItems.map((x: any) => {
            return amountOfItems = amountOfItems + 1 * x.qty
        })
    }

    return (
        <header className="desktopNavWrapper">
            {props.children}
            {fetchAmountOfItemsInCart()}
            <img className="logo" onClick={() => history.push(RoutingPath.homeView)} src="https://zaczess.se/wp-content/uploads/2021/01/cropped-zaczess-2048x586-1.png" alt="zaczess logotype" />
            <nav className="menu">
                <NavLink to={RoutingPath.homeView} activeClassName="is-active" exact={true}>Home</NavLink>
                <NavLink to={RoutingPath.storeView} activeClassName="is-active">Butik</NavLink>
                <NavLink to={RoutingPath.checkoutView} activeClassName="is-active">Kassan</NavLink>
                <NavLink to={RoutingPath.contactView} activeClassName="is-active">Kontakt</NavLink>
            </nav>
            <img className="search" src={searchLogo} alt="search" onClick={() => history.push(RoutingPath.cartView)} />
            <Cart />
            <div className="cart" onClick={() => setIsShoppingBagOpen(true)}>
                <img src={cartLogo} alt="cart" />
                <span>{amountOfItems}</span>
            </div>
        </header>
    )
}
