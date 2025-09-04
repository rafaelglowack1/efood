// store/index.ts
import api from "../services/api"
import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./reducers/cart" // <-- import do slice

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer // <-- adicionando aqui
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
