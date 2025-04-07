import { createSlice, createEntityAdapter } from "@reduxjs/toolkit"
import { getRestaurants } from "./get-restaurants.js"
import { getRestaurantById } from "./get-restaurant.js"

const entityAdapter = createEntityAdapter()

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(getRestaurants.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload)
    })
    builder.addCase(getRestaurantById.fulfilled, (state, { payload }) => {
      entityAdapter.setOne(state, payload)
    })
  }
})

const selectRestaurantsSlice = (state) => state.restaurants

export const {
  selectIds: selectRestaurantsId,
  selectById: selectRestaurantById,
  selectTotal: selectRestaurantsTotal
} = entityAdapter.getSelectors(selectRestaurantsSlice)
