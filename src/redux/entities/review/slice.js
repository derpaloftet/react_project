import { createSlice } from "@reduxjs/toolkit"
import { normalizedReviews } from "../../../assets/normalized-mock.js"

const initialState = {
  entities: normalizedReviews.reduce((acc, item) => {
    acc[item.id] = item
    return acc
  }, {}),
  ids: normalizedReviews.map(({ id }) => id)
}

export const reviewsSlice = createSlice({
  name: "reviewsSlice",
  initialState,
  selectors: {
    selectReviewById: (state, id) => state.entities[id]
  }
})

export const { selectReviewById } = reviewsSlice.selectors