import { configureStore } from "@reduxjs/toolkit";
import { informationApi } from "./shared/services/informationApi";
import settingsReducer from "./slices/settingsSlice";

export default configureStore({
  reducer: {
    [informationApi.reducerPath]: informationApi.reducer,
    settings: settingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(informationApi.middleware),
});
