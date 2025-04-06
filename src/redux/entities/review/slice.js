import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { getReviewsByRestaurantId } from "./get-reviews.js"

const entityAdapter = createEntityAdapter()

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getReviewsByRestaurantId.fulfilled, (state, { payload }) => {
      console.log("reviewsSlice payload", payload)
      entityAdapter.setMany(state, payload);
    }),
})
const selectReviewsSlice = (state) => state.reviews

export const { selectById: selectReviewById } = entityAdapter.getSelectors(selectReviewsSlice)