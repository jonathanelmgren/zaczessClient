import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import _ from 'lodash';

import { ProductsContext } from '../../shared/provider/ProductProvider';
import './Products.scss'
import RoutingPath from '../../routes/RoutingPath';

type ProductProps = {
    title: string,
    filter: string,
    wrapper: string
    slice?: number
    order?: any
}
export const Products = ({ title, filter, wrapper, slice, order }: ProductProps) => {
    const history = useHistory()

    const [products,] = useContext(ProductsContext)
    if (!order) order = 'desc'
    const sortedProducts = _.orderBy(products, [filter], [order])

    return (
        <section className={wrapper}>
            <h4>{title}</h4>
            { sortedProducts.slice(0, slice).map((x: any) => (
                <div className="bestSellersContainer" onClick={() => history.push(RoutingPath.productView, x)}>
                    <img src={`http://localhost:3001/${x.featuredImage}`} alt="err" />
                    <h4>{x.title}</h4>
                    <span>{x.tags}</span>
                    <span>{x.price}</span>
                </div>
            ))}
        </section>
    )
}
