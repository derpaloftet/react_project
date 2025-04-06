import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { getDishesByRestaurantId } from "./get-dishes.js"

const entityAdapter = createEntityAdapter()

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
      console.log("dishesSlice payload", payload)
      entityAdapter.setMany(state, payload);
    }),
})

const selectDishesSlice = (state) => state.dishes

export const { selectById: selectDishById } = entityAdapter.getSelectors(selectDishesSlice)
