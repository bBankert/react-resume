import {
    AnyAction,
    combineReducers,
    configureStore,
    EnhancedStore,
    Middleware,
    Reducer,
  } from "@reduxjs/toolkit";

  import { Provider } from 'react-redux';
  
  export function setupApiStore(api, extraReducers){
    /*
     * Modified version of RTK Query's helper function:
     * https://github.com/reduxjs/redux-toolkit/blob/master/packages/toolkit/src/query/tests/helpers.tsx
     */
    const getStore = () =>
      configureStore({
        reducer: combineReducers({
          [api.reducerPath]: api.reducer,
          ...extraReducers,
        }),
        middleware: (gdm) =>
          gdm({ serializableCheck: false, immutableCheck: false }).concat(
            api.middleware
          ),
      });


    const withProvider = (store) => {
        return function Wrapper ({ children }) {
            return <Provider store={store}>{children}</Provider>
        }
    }
  
    const initialStore = getStore();
    const refObj = {
      api,
      store: initialStore,
    };
    const store = getStore();
    refObj.store = store;
    refObj.wrapper = withProvider(store)
  
    return refObj;
  }