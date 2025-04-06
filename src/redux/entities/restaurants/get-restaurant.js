import { createAsyncThunk } from "@reduxjs/toolkit"

export const getRestaurant = createAsyncThunk(
  "restaurants/getRestaurant",
  async (restaurantId,
         { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/restaurant/${ restaurantId }`)

    const result = await response.json()
    if (!result.length) {
      rejectWithValue("no data")
      return
    }

    return result
  }
)