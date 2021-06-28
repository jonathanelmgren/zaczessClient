import * as actionTypes from "../constants/cartConstants"

export const addToCart = (product: any) => async (dispatch: any, getState: any) => {
    const quantity = parseInt(product.qty)
    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: product.id,
            title: product.title,
            price: product.price,
            seat: product.seat,
            size: product.size,
            stock: product.stock,
            color: product.color,
            featuredImage: product.featuredImage,
            qty: quantity
        },
    })
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = (id: any) => (dispatch: any, getState: any) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id,
    })
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
}

export const addQuantity = (id: any) => (dispatch: any, getState: any) => {
    dispatch({
        type: actionTypes.ADD_QUANTITY,
        payload: id,
    })
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
}
export const subQuantity = (id: any) => (dispatch: any, getState: any) => {
    dispatch({
        type: actionTypes.SUB_QUANTITY,
        payload: id,
    })
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
}