import './SingleProductView.scss'

import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export const SingleProductView = () => {
    const location = useLocation()
    const product: any = location.state
    const [productVariant, setProductVaritant] = useState({
        size: '',
        color: '',
        seat: '',
        price: product.price,
        name: product.title,
        stock: 0,
        _id: product._id
    })


    let img = `http://localhost:3001/${product.featuredImage}`
    if (!product.featuredImage) img = 'https://picsum.photos/1300/1900'

    const checkIfVariationIsActive = (variation: any) => {
        //check what variation is passed to check against productVariant
        //has to be a better way to do this
        let productVar
        if (variation === productVariant.size) productVar = productVariant.size
        if (variation === productVariant.color) productVar = productVariant.color
        if (variation === productVariant.seat) productVar = productVariant.seat

        let isActive
        if (productVar === variation) {
            isActive = 'is-active'
        } else {
            isActive = productVar
        }
        return isActive
    }

    const getVariations = () => {
        //remove duplicates
        const sizes = [...new Set(product.variations.map((a: any) => a.size))]
        const colors = [...new Set(product.variations.map((a: any) => a.color))]
        const seat = [...new Set(product.variations.map((a: any) => a.seat))]

        return (
            <div className="variants">
                <div className="sizes">
                    {sizes.map((sizes: any) => {
                        const isActive = checkIfVariationIsActive(sizes)
                        return (
                            <span onClick={() => setProductVaritant({ ...productVariant, size: sizes })} className={isActive}>{sizes}</span>
                        )
                    })}
                </div>
                <br />
                <div className="colors">
                    {colors.map((colors: any) => {
                        const isActive = checkIfVariationIsActive(colors)
                        return (
                            <span onClick={() => setProductVaritant({ ...productVariant, color: colors })} className={isActive}>{colors}</span>
                        )
                    })}
                </div>
                <br />
                <div className="seat">
                    {seat.map((seat: any) => {
                        const isActive = checkIfVariationIsActive(seat)
                        return (
                            <span onClick={() => setProductVaritant({ ...productVariant, seat: seat })} className={isActive}>{seat}</span>
                        )
                    })}
                </div>
                <span className="stock">Stock: {productVariant.stock}</span>
            </div>
        )
    }

    const updateStock = () => {
        const variation = product.variations.filter((variation: any) => {
            return (
                variation.size === productVariant.size &&
                variation.color === productVariant.color &&
                variation.seat === productVariant.seat
            )
        })
        setProductVaritant({ ...productVariant, _id: variation[0]?._id })
        setProductVaritant({ ...productVariant, stock: variation[0]?.stock })

    }

    useEffect(() => {
        updateStock()
    }, [productVariant.size, productVariant.color, productVariant.seat])

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
                    <span>{product.price} :-</span><br />
                    <br />
                    {getVariations()}
                    
                </div>
                <button onClick={() => console.log(productVariant)}>Add to cart</button>
                <button onClick={() => console.log(productVariant)}>Test variation2</button>
            </div>
        </div>
    )
}
