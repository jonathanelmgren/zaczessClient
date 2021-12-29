import './HomeView.scss'
import { Products } from '../../../components/products/Products'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'

export const HomeView = () => {
	const getProducts = useSelector((state: any) => state.getProducts)
	const { products, loading, error } = getProducts
	const history = useHistory()

	return (
		<main className='homeViewWrapper'>
			<section className='header'>
				<div className='introText'>
					<span>
						{' '}
						<h3>Dressed</h3> <br />
						<p>for</p> <h3>ZacZess</h3>
					</span>
					<br />
					<button onClick={() => history.push(RoutingPath.storeView)}>SHOP NOW</button>
				</div>
			</section>
			<section className='categoryDisplayWrapper'>
				<div className='categoryOne'>
					<p>Ridbyxor</p>
					<button onClick={() => history.push(RoutingPath.storeView)}>SHOP</button>
				</div>
				<div className='categoryTwo'>
					<p>Accessoarer</p>
					<button onClick={() => history.push(RoutingPath.storeView)}>SHOP</button>
				</div>
				<div className='categoryThree'>
					<p>Överdelar</p>
					<button onClick={() => history.push(RoutingPath.storeView)}>SHOP</button>
				</div>
			</section>
			<section className='instagramFeedWrapper'>
				<h4>You inspire us! Tag @zaczess.equestrian to get featured 🤩</h4>
				<img src='https://picsum.photos/200/200' alt='instagram' />
				<img src='https://picsum.photos/200/200' alt='instagram' />
				<img src='https://picsum.photos/200/200' alt='instagram' />
				<img src='https://picsum.photos/200/200' alt='instagram' />
			</section>
			<Products arr={products} title='Bestsellers' sort='amountOfTimesOrdered' name='bestSellers' slice={4} />
			<section className='ctaWrapper'>
				<h4>Bläddra mellan alla våra produkter</h4>
				<button onClick={() => history.push(RoutingPath.storeView)}>SHOP</button>
			</section>
			<Products arr={products} title='Newest' sort='createdAt' name='newestProducts' slice={4} />
		</main>
	)
}
