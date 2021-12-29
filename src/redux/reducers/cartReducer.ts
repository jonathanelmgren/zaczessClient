import * as actionTypes from "../constants/cartConstants"

const CART_INITIAL_STATE = {
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action: any) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;
      const existItem: any = state.cartItems.find((x: any) => x.id === item.id);


      if (existItem) {

        return {
          ...state,
          cartItems: state.cartItems.map((x: any) =>
            x.id === existItem.id ? item : x
          ),
        };
      } else {

        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x: any) => x.id !== action.payload),
      };

    case actionTypes.ADD_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((product: any) => {
          if (product.id === action.payload && product.qty < product.stock) {
            return (
              { ...product, qty: product.qty + 1 }
            )
          } else {
            return product
          }
        }
        ),
      };

    case actionTypes.SUB_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((product: any) => {
          if (product.id === action.payload && product.qty > 1) {
            return (
              { ...product, qty: product.qty - 1 }
            )
          } else {
            return product
          }
        }
        ),
      };

    default:
      return state;
  }
};