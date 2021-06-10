import './SingleProductView.scss'

import { useLocation } from 'react-router-dom'

export const SingleProductView = () => {
    const location = useLocation()
    const product: any = location.state

    const img = `http://localhost:3001/${product.featuredImage}`

    const getTags = () => {
        return(
            product.tags.map((text:any) => <span>{text} </span>)
        )
    }
    const getVariations = (x?:any) => {
        product.variations.map((text:any) => {
            const aa = text.x
            return(
                <span>{aa}</span>
            )
        })



        /* return(
            product.variations.map((text:any) => 
            <div>
                <span>{text.size} </span>
                <span>{text.color} </span>
            </div>)
        ) */
    }

    return (
        <div className="singleProductViewWrapper">
            <div className="leftColumn">
                <img src={img} alt="err" />
            </div>
            <div className="rightColumn">
                <div className="productInfo">
                    <h2>{product.title}</h2>
                    <p>SOFIA BLACK är det perfekt basplagget i garderoben, både till stallet och till vardags. Det stretchiga tyget med dess mjuka känsla gör att du kan röra dig obehindrat med maximal komfort. Designad med ton-i-ton detaljer som ger ett stilfullt utseende. SOFIA BLACK är så mjuk och skön att du kommer vilja ha en till stallet och en till mysiga hemmakvällar.

                    SOFIA BLACK passar till våra OHIO-ridleggnings när du vill ha en avslappnad look men funkar likväl till våra PRO-ridbyxor när du vill känna dig mer uppklädd.

                    • Mjukt och skönt funktionstyg
                    • Transporterar bort svett
                    • Snabbtorkande
                    • Normal i storlek
                    </p>
                </div>
                <div className="productMeta">
                    <span>{product.price} :-</span><br/>
                    {getTags()}
                    <br />
                    {getVariations()}
                </div>
            </div>
        </div>
    )
}
