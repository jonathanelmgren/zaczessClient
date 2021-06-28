import { useSelector, useDispatch } from "react-redux"

import { removeFromCart } from "../../../redux/actions/cartActions";
import { addQuantity, subQuantity } from "../../../redux/actions/cartActions";

export const CartView = () => {
    const cart = useSelector((state: any) => state.cart);
    const dispatch = useDispatch();

    let totalPrice: number = 0

    const displayCart = () => {
        return (
            cart.cartItems.map((x: any) => {
                totalPrice = totalPrice + x.price * x.qty
                return (
                    <div>
                        <h5>{x.title}</h5>
                        <span>{x.price}</span><br />
                        <button onClick={() => dispatch(subQuantity(x.id))}>-</button>
                        <span>{x.qty}</span>
                        <button onClick={() => dispatch(addQuantity(x.id))}>+</button>
                        <span onClick={() => dispatch(removeFromCart(x.id))}>X</span>
                        <span>Subtotal: {x.price*x.qty}</span>
                    </div>
                )
            })
        )
    }

    return (
        <div>
            <button onClick={() => console.log(cart)}>CartView</button>
            {displayCart()}
            <span>Totales: {totalPrice}</span>
        </div>
    )
}
