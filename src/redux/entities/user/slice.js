import { createSlice } from "@reduxjs/toolkit"
import { normalizedUsers } from "../../../assets/normalized-mock.js"

const initialState = {
  entities: normalizedUsers.reduce((acc, item) => {
    acc[item.id] = item
    return acc
  }, {}),
  ids: normalizedUsers.map(({ id }) => id)
}

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  selectors: {
    selectUserById: (state, id) => state.entities[id]
  }
})

export const { selectUserById } = usersSlice.selectors