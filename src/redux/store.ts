import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authReducer from './features/auth/authSlice'
import cartReducer from './features/cart/cartSlice'
import { baseApi } from "./api/baseApi";
import {persistReducer, persistStore,FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from 'redux-persist'

import storage from "redux-persist/lib/storage";

const persistConfig = {
    key:'root',
    storage,
    whitelist: ["auth", "cart"]
}

const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
  });

  const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer:{
        [baseApi.reducerPath]:baseApi.reducer,
        reducer:persistedReducer
    },
    middleware:getDefaultyMiddlewares => getDefaultyMiddlewares({
        serializableCheck: {
          ignoredActions: [FLUSH,
            REHYDRATE,
            PAUSE,
            PERSIST,
            PURGE,
            REGISTER]
        }
        }).concat(baseApi.middleware)
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export const persistor = persistStore(store)