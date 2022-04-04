import { combineReducers } from "redux";
import { cart_reducer,product_reducer } from "./extra/reducers";

const rootReducer = combineReducers(
    {
        products:product_reducer,
        cart:cart_reducer
    }
)

export default rootReducer;

