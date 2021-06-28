import './HomeView.scss'
import {Products} from '../../../components/products/Products'

export const HomeView = () => {

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
            <Products title="Deal of the week" sort="dotw" name="dotw" slice={1}/>
            <Products title="Bestsellers" sort="amountOfTimesOrdered" name="bestSellers" slice={4}/>
            <section className="ctaWrapper">
                <h4>Bläddra mellan alla våra produkter</h4>
                <button>SHOP</button>
            </section>
            <Products title="Newest" sort="createdAt" name="newestProducts" slice={4}/>
        </div>
    )
}
