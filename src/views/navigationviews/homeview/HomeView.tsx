import { useContext } from 'react'
import _ from 'lodash';

import { ProductsContext } from '../../../shared/provider/ProductProvider';
import './HomeView.scss'
import {Products} from '../../../components/products/Products'

export const HomeView = () => {
    const [products,] = useContext(ProductsContext)

    const displayDOTW = () => {
        const dotw = products[0];
        let productImage = `http://localhost:3001/${dotw?.featuredImage}`
        if (!dotw?.featuredImage) productImage = 'https://picsum.photos/1300/1700'
        return (
            <section className="dotwWrapper">
                <h4>Deal of the week</h4>
                <img src={productImage} alt="instagram" />
                <h2>{dotw?.title}</h2>
                <p className="tags">{dotw?.tags}</p>
                <p className="price">{dotw?.price} kr</p>
            </section>
        )
    }

    return (
        <div className="homeViewWrapper">
            <section className="header">
                <div className="introText">
                    <span> <h3>Dressed</h3> <br /><p>for</p> <h3>ZacZess</h3></span><br />
                    <button>SHOP NOW</button>
                </div>
            </section>
            <section className="categoryDisplayWrapper">
                <div className="categoryOne">
                    <p>Ridbyxor</p>
                    <button>SHOP</button>
                </div>
                <div className="categoryTwo">
                    <p>Accessoarer</p>
                    <button>SHOP</button>
                </div>
                <div className="categoryThree">
                    <p>Överdelar</p>
                    <button>SHOP</button>
                </div>
            </section>
            <section className="instagramFeedWrapper">
                <h4>You inspire us! Tag @zaczess.equestrian to get featured 🤩</h4>
                <img src="https://picsum.photos/200/200" alt="instagram" />
                <img src="https://picsum.photos/200/200" alt="instagram" />
                <img src="https://picsum.photos/200/200" alt="instagram" />
                <img src="https://picsum.photos/200/200" alt="instagram" />
            </section>
            {displayDOTW()}
            <Products title="Deal of the week" filter="dotw" wrapper="dotwWrapper" slice={1}/>
            <Products title="Bestsellers" filter="amountOfTimesOrdered" wrapper="bestSellersWrapper" slice={3}/>
            <section className="ctaWrapper">
                <h4>Bläddra mellan alla våra produkter</h4>
                <button>SHOP</button>
            </section>
            <Products title="Newest" filter="createdAt" wrapper="bestSellersWrapper" slice={4}/>
        </div>
    )
}
