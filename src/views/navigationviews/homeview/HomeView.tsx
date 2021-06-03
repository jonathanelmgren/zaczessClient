import { useState } from 'react'

import APIService from '../../../shared/api/service/APIService'
import './HomeView.scss'

export const HomeView = () => {
    const [products, setProducts] = useState<any>([])
    
    
    const getAllProducts = async () => {
        try {
            const response = await APIService.getAllProducts()
            setProducts(response.data)
            console.log(products)
        } catch (error) {
            console.log(error)
        }
    }

    const displayDOTW = () => {
        const dotw = products[0];
        let productImage = `http://localhost:3001/${dotw?.image}`
        if(!dotw?.image) {productImage = 'https://picsum.photos/200/200'}
        return(
            <div className="dotw">
                <img src={productImage} alt="instagram" />
                <h2>{dotw?.title}</h2>
                <p>{dotw?.tags}</p>
                <p>{dotw?.price}</p>
            </div>
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
                <h4 onClick={() => getAllProducts()}>You inspire us! Tag @zaczess.equestrian to get featured 🤩</h4>
                <img src="https://picsum.photos/200/200" alt="instagram" />
                <img src="https://picsum.photos/200/200" alt="instagram" />
                <img src="https://picsum.photos/200/200" alt="instagram" />
                <img src="https://picsum.photos/200/200" alt="instagram" />
            </section>
            <section className="dotwWrapper">
                <h4>Deal of the week</h4>
                {displayDOTW()}
            </section>
        </div>
    )
}
