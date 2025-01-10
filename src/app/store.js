import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Features/Couter/CouterSilce';
import userReducer from '../Features/Auth/UserSilce';
import { useReducer } from "react";


const rootReducer = {
    count: counterReducer,
    user: userReducer
};

const store = configureStore({
    reducer: rootReducer,
})

export default store;