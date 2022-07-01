import { configureStore  } from "@reduxjs/toolkit";
import { informationApi } from "../slices/api-slice";


export default configureStore({
    reducer:{
        [informationApi.reducerPath]: informationApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(informationApi.middleware)
});
