import { configureStore } from "@reduxjs/toolkit"
import { restaurantsSlice } from "./entities/restaurant/slice"
import { dishesSlice } from "./entities/dish/slice.js"
import { reviewsSlice } from "./entities/review/slice.js"
import { usersSlice } from "./entities/user/slice.js"
import { cartSlice } from "./entities/cart/slice.js"
import { requestSlice } from "./entities/request/slice.js"

const loggerMiddleware = (store) => (next) => (action) => {
  return next(action)
}
export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
})