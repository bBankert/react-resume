import {
  AnyAction,
  combineReducers,
  configureStore,
  EnhancedStore,
  Middleware,
  Reducer,
  Store,
} from "@reduxjs/toolkit";
import React from "react";
import { Provider } from "react-redux";

// Copied from redux toolkit's testing utils code
// https://github.com/reduxjs/redux-toolkit/blob/64a30d83384d77bcbc59231fa32aa2f1acd67020/packages/toolkit/src/query/tests/helpers.tsx#L170-L205
export function setupApiStore<
  A extends {
    reducerPath: string;
    reducer: Reducer<any, any>;
    middleware: Middleware;
    util: { resetApiState(): any };
  },
  R extends Record<string, Reducer<any, any>> = Record<never, never>
>(api: A, extraReducers?: R, withoutListeners?: boolean) {
  const getStore = () =>
    configureStore({
      reducer: { [api.reducerPath]: api.reducer, ...extraReducers },
      middleware: (gdm) =>
        gdm({ serializableCheck: false, immutableCheck: false }).concat(
          api.middleware
        ),
    });

  type StoreType = EnhancedStore<
    {
      api: ReturnType<A["reducer"]>;
    } & {
      [K in keyof R]: ReturnType<R[K]>;
    },
    AnyAction,
    ReturnType<typeof getStore> extends EnhancedStore<any, any, infer M>
      ? M
      : never
  >;

  function withProvider(store: Store<any>) {
    return function Wrapper({ children }: any) {
      return <Provider store={store}>{children}</Provider>;
    };
  }

  const initialStore = getStore() as StoreType;
  const refObj = {
    api,
    store: initialStore,
    wrapper: withProvider(initialStore),
  };
  const store = getStore();
  refObj.store = store as StoreType;
  refObj.wrapper = withProvider(store);

  return refObj;
}
