import { createAsyncThunk } from "@reduxjs/toolkit"

export const getReviewsByRestaurantId = createAsyncThunk(
  "reviews/getReviewsByRestaurantId",
  async (restaurantId,
         { rejectWithValue }) => {
    console.log("reviews/getReviewsByRestaurantId "+ restaurantId)
    const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${ restaurantId }`)

    const result = await response.json()
    if (!result.length) {
      rejectWithValue("no data")
      return
    }

    return result
  }
)