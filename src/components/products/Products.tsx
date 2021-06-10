import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import _ from 'lodash';

import { ProductsContext } from '../../shared/provider/ProductProvider';
import './Products.scss'
import RoutingPath from '../../routes/RoutingPath';

type ProductProps = {
    title: string,
    filter: string,
    name: string
    slice?: number
    order?: any
}
export const Products = ({ title, filter, name, slice, order }: ProductProps) => {
    const history = useHistory()
    const [products,] = useContext(ProductsContext)

    const wrapper = `${name}Wrapper`
    const container = `${name}Container`

    if (!order) order = 'desc'
    const sortedProducts = _.orderBy(products, [filter], [order])

    return (
        <section className={wrapper}>
            <h4>{title}</h4>
            { sortedProducts.slice(0, slice).map((x: any) => {
                let productImage = `http://localhost:3001/${x.featuredImage}`
                if (!x.featuredImage) productImage = 'https://picsum.photos/1300/1900'
                return (
                    <div className={container} onClick={() => history.push(RoutingPath.productView, x) } key={x._id}>
                        <img src={productImage} alt="err" />
                        <h4>{x.title}</h4>
                        <span>{x.tags}</span>
                        <span>{x.price}</span>
                    </div>
                )
            }
            )}
        </section>
    )
}
