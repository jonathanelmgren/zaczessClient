import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { getProductsReducer } from "./reducers/productReducer";
import { getCategoriesReducer } from "./reducers/categoryReducer";
import { cartReducer } from "./reducers/cartReducer";

const reducer = combineReducers({
    getProducts: getProductsReducer,
    cart: cartReducer,
    getCategories: getCategoriesReducer
});


const cartItemsInLocalStorage = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")!)
    : [];

const INITIAL_STATE: any = {
    cart: {
        cartItems: cartItemsInLocalStorage,
    },
};

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;