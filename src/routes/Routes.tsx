import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from "react-redux"

import RoutingPath from './RoutingPath'
import { NewProductView } from '../views/adminviews/NewProductView'
import { ContactView } from '../views/navigationviews/contactview/ContactView'
import { HomeView } from '../views/navigationviews/homeview/HomeView'
import { StoreView } from '../views/navigationviews/storeview/StoreView'
import { CartView } from '../views/storeviews/cartview/CartView'
import { CheckoutView } from '../views/storeviews/checkoutview/CheckoutView'
import { SingleProductView } from '../views/storeviews/singleproductview/SingleProductView'

import { getProducts as listProducts } from "../redux/actions/productActions"

export const Routes = (props: { children: React.ReactChild[] }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(listProducts())
	}, [dispatch])

	return (
		<BrowserRouter>
			{props.children[0]}
			<Switch>
				<Route exact path={RoutingPath.contactView} component={ContactView} />
				<Route exact path={RoutingPath.storeView} component={StoreView} />
				<Route exact path={RoutingPath.cartView} component={CartView} />
				<Route exact path={RoutingPath.checkoutView} component={CheckoutView} />
				<Route exact path={RoutingPath.newProductView} component={NewProductView} />
				<Route exact path={RoutingPath.productView} component={SingleProductView} />
				<Route component={HomeView} />
			</Switch>
			{props.children[1]}
		</BrowserRouter>
	)
}
