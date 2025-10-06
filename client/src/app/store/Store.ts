import { configureStore, legacy_createStore } from "@reduxjs/toolkit";
import CounterReducer, { counterSlice } from "../../featuers/contact/CouterReducer";
import { useDispatch, useSelector } from "react-redux";
import { catalogApi } from "../../featuers/catalog/catalogApi";
import { uiSlice } from "../layout/uiSlice";
import { errorApi } from "../../featuers/about/errorApi";
import { basketApi } from "../../featuers/basket/basketApi";
import { catalogSlice } from "../../featuers/catalog/catalogSlice";
import { accountApi } from "../../featuers/account/accountApi";

export function configureTheStore() {
    return legacy_createStore(CounterReducer)
}

export const store = configureStore(
    {
        reducer: {
            [catalogApi.reducerPath]: catalogApi.reducer,
            [errorApi.reducerPath]: errorApi.reducer,
            [basketApi.reducerPath]: basketApi.reducer,
            [accountApi.reducerPath]:accountApi.reducer,
            counter: counterSlice.reducer,
            ui: uiSlice.reducer,
            catalog: catalogSlice.reducer
        },
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(
                catalogApi.middleware,
                errorApi.middleware,
                basketApi.middleware,
                accountApi.middleware
            )
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()