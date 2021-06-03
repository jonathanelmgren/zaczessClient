import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { NewProductView } from '../views/adminviews/NewProductView';
import { ContactView } from '../views/navigationviews/contactview/ContactView';
import { HomeView } from '../views/navigationviews/homeview/HomeView';
import { StoreView } from '../views/navigationviews/storeview/StoreView';
import { CartView } from '../views/storeviews/cartview/CartView';
import { CheckoutView } from '../views/storeviews/checkoutview/CheckoutView';
import RoutingPath from './RoutingPath';

export const Routes = (props: {children?: React.ReactChild}) => {
	return (
		<BrowserRouter>
			{props.children}
			<Switch>
				<Route exact path={RoutingPath.contactView} component={ContactView} />
				<Route exact path={RoutingPath.storeView} component={StoreView} />
				<Route exact path={RoutingPath.cartView} component={CartView} />
				<Route exact path={RoutingPath.checkoutView} component={CheckoutView} />
				<Route exact path={RoutingPath.newProductView} component={NewProductView} />
				<Route component={HomeView} />
			</Switch>
		</BrowserRouter>
	);
};
