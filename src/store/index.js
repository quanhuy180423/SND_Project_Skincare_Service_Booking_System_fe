import { ENV } from "@/constant/environment";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducer/authReducer";
import serviceReducer from "./slices/service/serviceSlice";
import filterServicesReducer from "./slices/service/filterComboandsingle";


const store = configureStore({
    reducer: {
        auth: authReducer,
        services: serviceReducer,
        filterServices: filterServicesReducer

    },
    // preloadedState,
    devTools: ENV === 'development',
});


export default store;