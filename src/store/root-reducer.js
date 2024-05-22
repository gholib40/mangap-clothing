import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";
import { cartReducers } from "./cart/cart.reducers";

export const rootReducers = combineReducers({
    user : userReducer,
    categories : categoriesReducer,
    cart : cartReducers
})