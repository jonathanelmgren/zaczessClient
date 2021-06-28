import { useHistory } from 'react-router-dom'
import { useSelector } from "react-redux"
import _ from 'lodash';

import './Products.scss'
import RoutingPath from '../../routes/RoutingPath';

type ProductProps = {
    title: string,
    sort?: string,
    name: string,
    slice?: number,
    order?: any,
    filter?: string
}
export const Products = ({ title, sort, name, slice, order, filter }: ProductProps) => {
    const history = useHistory()

    const getProducts = useSelector((state: any) => state.getProducts);
    const { products, loading, error } = getProducts;

    const wrapper = `${name}Wrapper`
    const container = `${name}Container`

    if (!order) order = 'desc'

    const sortedProducts = _.orderBy(products, [sort], [order])

    const filterOrNot = () => {
        if (filter !== undefined) {
            return (
                sortedProducts.filter((x: any) =>
                    x.tags.includes(filter) ||
                    x.categories.horse.includes(filter) ||
                    x.categories.rider.includes(filter))
                    .slice(0, slice).map((x: any) => {
                        let productImage = `http://localhost:3001/${x.featuredImage}`
                        if (!x.featuredImage) productImage = 'https://picsum.photos/1300/1900'
                        return (
                            <div className={container} onClick={() => history.push(RoutingPath.productView, x)} key={x._id}>
                                <img src={productImage} alt="err" />
                                <h4>{x.title}</h4>
                                <span className="tags">{x.tags}</span>
                                <span className="price">{x.price}</span>
                            </div>
                        )
                    }
                    )
            )
        } else {
            return (
                sortedProducts.slice(0, slice).map((x: any) => {
                    let productImage = `http://localhost:3001/${x.featuredImage}`
                    if (!x.featuredImage) productImage = 'https://picsum.photos/1300/1900'
                    return (
                        <div className={container} onClick={() => history.push(RoutingPath.productView, x)} key={x._id}>
                            <img src={productImage} alt="err" />
                            <h4>{x.title}</h4>
                            <span className="tags">{x.tags}</span>
                            <span className="price">{x.price}</span>
                        </div>
                    )
                }
                )
            )
        }
    }

    const displayProducts = () => {
        if (loading) return <h2>LOADING</h2>
        if (error) return <h2>{error}</h2>
        return (
            <section className={wrapper}>
                <h4>{title}</h4>
                {filterOrNot()}
            </section>
        )
    }

    return (
        displayProducts()
    )
}
