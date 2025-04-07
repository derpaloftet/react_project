import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { getUsers } from "./get-users.js"

const entityAdapter = createEntityAdapter()

export const usersSlice = createSlice({
  name: "users",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) => builder
    .addCase(getUsers.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload)
    })
})
const selectUsersSlice = (state) => state.users

export const {
  selectById: selectUserById,
  selectTotal: selectUsersTotal
} = entityAdapter.getSelectors(selectUsersSlice)