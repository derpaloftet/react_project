import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { getDishesByRestaurantId } from "./get-dishes.js"
import { getDishById } from "./get-dish.js"

const entityAdapter = createEntityAdapter()

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload)
    })
    builder.addCase(getDishById.fulfilled, (state, { payload }) => {
      entityAdapter.setOne(state, payload)
    })
  }
})

const selectDishesSlice = (state) => state.dishes

export const { selectById: selectDishById } = entityAdapter.getSelectors(selectDishesSlice)
