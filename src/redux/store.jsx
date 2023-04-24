import { configureStore } from "@reduxjs/toolkit";

import alertReducer from './alertSlice';
import userSlice from "./userSlice";


const store = configureStore({
    reducer: {
        alertLoader: alertReducer,
        userData: userSlice
    }
});


export default store;