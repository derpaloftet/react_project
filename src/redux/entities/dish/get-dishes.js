import { createAsyncThunk } from "@reduxjs/toolkit"

export const getDishesByRestaurantId = createAsyncThunk(
  "dishes/getDishesByRestaurantId",
  async (restaurantId,
         { rejectWithValue }) => {
    console.log("dishes/getDishesByRestaurantId"+restaurantId)
    const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${ restaurantId }`)

    const result = await response.json()
    if (!result.length) {
      rejectWithValue("no data")
      return
    }

    return result
  }
)