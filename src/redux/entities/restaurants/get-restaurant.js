import { createAsyncThunk } from "@reduxjs/toolkit"
import { selectRestaurantById } from "./slice.js"

export const getRestaurantById = createAsyncThunk(
  "restaurants/getRestaurant",
  async (restaurantId) => {
    const response = await fetch(`http://localhost:3001/api/restaurant/${ restaurantId }`)
    return await response.json()
  },
  {
    condition: (restaurantId, { getState }) => {
      return !selectRestaurantById(getState(), restaurantId)
    }
  }
)