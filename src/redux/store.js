import { configureStore } from "@reduxjs/toolkit"
import { restaurantsSlice } from "./entities/restaurant/slice"
import { dishesSlice } from "./entities/dish/slice.js"
import { reviewsSlice } from "./entities/review/slice.js"
import { usersSlice } from "./entities/user/slice.js"
import { cartSlice } from "./entities/cart/slice.js"


export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer
  }
})