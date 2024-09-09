import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { userApi } from "@/api/user";
import { productsApi } from "@/api/products";

import portfolioReducer from "./userSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["portfolio"], // only navigation will be persisted
};

const rootReducer = combineReducers({
  portfolio: portfolioReducer,
  [userApi.reducerPath]: userApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userApi.middleware, productsApi.middleware]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
