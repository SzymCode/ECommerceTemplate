import { createSlice } from "@reduxjs/toolkit"

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistItems: []
  },
  reducers: {
    addToWishlist: (state, action) => {
      const item = state.wishlistItems.find((p) => p.id === action.payload.id)
      if (!item) {
        state.wishlistItems.push({ ...action.payload, quantity: 1 })
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (p) => p.id !== action.payload.id
      )
    }
  }
})

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer
