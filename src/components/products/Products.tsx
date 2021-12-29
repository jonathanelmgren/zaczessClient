import { useHistory } from 'react-router-dom'
import _ from 'lodash'

import './Products.scss'
import RoutingPath from '../../routes/RoutingPath'

type ProductProps = {
	title: string
	sort?: string
	name: string
	slice?: number
	order?: any
	filter?: string
	arr: object[]
}
export const Products = ({ title, sort, name, slice, order, filter, arr }: ProductProps) => {
	const API_URL: any = process.env.REACT_APP_API_URL
	const history = useHistory()

	const wrapper = `${name}Wrapper`
	const container = `${name}Container`

	const isAuthenticated: boolean = false

	if (!order) order = 'desc'

	const sortedProducts = _.orderBy(arr, [sort], [order])

	const showEditIfAuthenticated = (x: any) => {
		if (isAuthenticated) {
			return <p onClick={() => history.push(RoutingPath.adminView, x)}>EDIT</p>
		} else {
			return
		}
	}

	const displayProduct = (x: any) => {
		let productImage = `${API_URL}${x.featuredImage}`
		if (!x.featuredImage) productImage = 'https://picsum.photos/1300/1900'
		return (
			<div className={container} key={x._id}>
				<img src={productImage} alt='err' onClick={() => history.push(RoutingPath.productView, x)} />
				<h4 onClick={() => history.push(RoutingPath.productView, x)}>{x.title}</h4>
				<span className='price' onClick={() => history.push(RoutingPath.productView, x)}>
					{x.price}:-
				</span>
				{showEditIfAuthenticated(x)}
			</div>
		)
	}

	const filterOrNot = () => {
		if (filter !== undefined) {
			return sortedProducts
				.filter((x: any) => x.tags.includes(filter) || x.categories.includes(filter))
				.slice(0, slice)
				.map((x: any) => displayProduct(x))
		} else {
			return sortedProducts.slice(0, slice).map((x: any) => displayProduct(x))
		}
	}

	const displayProducts = () => {
		return (
			<>
				<div className='archiveTitle'>
					<h4>{title}</h4>
				</div>
				<section className={`productscontainer ${wrapper}`}>{filterOrNot()}</section>
			</>
		)
	}

	return displayProducts()
}
