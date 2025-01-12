import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Features/Couter/CouterSilce';
import userReducer from '../Features/Auth/UserSilce/UserSilce';
import productReducer from '../Features/Auth/ProductSlice/ProductSlice';

const rootReducer = {
    count: counterReducer,
    user: userReducer,
    product: productReducer
};

const store = configureStore({
    reducer: rootReducer,
})

export default store;