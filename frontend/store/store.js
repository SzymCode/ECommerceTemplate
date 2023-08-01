import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice"
import wishlistSlice from "./wishlistSlice"

export default configureStore({
    reducer: {
        cart: cartSlice,
        wishlist: wishlistSlice
    },
})