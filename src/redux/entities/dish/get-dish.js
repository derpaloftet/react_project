import { createAsyncThunk } from "@reduxjs/toolkit"
import { selectDishById } from "./slice.js"

export const getDishById = createAsyncThunk(
  "dishes/getDishesById",
  async (dishId) => {
    const response = await fetch(`http://localhost:3001/api/dish/${ dishId }`)
    return await response.json()
  },
  {
    condition: (dishId, { getState }) => {
      return !selectDishById(getState(), dishId)
    }
  }
)