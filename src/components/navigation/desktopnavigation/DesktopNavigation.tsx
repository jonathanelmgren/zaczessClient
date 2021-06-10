import {useHistory} from 'react-router-dom'

import RoutingPath from '../../../routes/RoutingPath'
import cartLogo from '../../../images/navigation/cart.svg'
import searchLogo from '../../../images/navigation/search.svg'
import './DesktopNavigation.scss'

export const DesktopNavigation = (props: {children?: React.ReactChild}) => {
    const history = useHistory()
    
    return (
        <header className="desktopNavWrapper">
            {props.children}
            <img className="logo" onClick={() => history.push(RoutingPath.homeView)} src="https://zaczess.se/wp-content/uploads/2021/01/cropped-zaczess-2048x586-1.png" alt="zaczess logotype"/>
            <nav className="menu">
                <span onClick={() => history.push(RoutingPath.homeView)}>Home</span>
                <span onClick={() => history.push(RoutingPath.storeView)}>Butik</span>
                <span onClick={() => history.push(RoutingPath.checkoutView)}>Kassan</span>
                <span onClick={() => history.push(RoutingPath.contactView)}>Kontakt</span>
            </nav>
                <img className="search" src={searchLogo} alt="search" onClick={() => history.push(RoutingPath.cartView)} />
                <img className="cart" src={cartLogo} alt="cart" onClick={() => history.push(RoutingPath.cartView)} />
        </header>
    )
}
