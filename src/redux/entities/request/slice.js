import { createSlice } from "@reduxjs/toolkit"
import { REQUEST_STATUS_FULFILLED, REQUEST_STATUS_PENDING, REQUEST_STATUS_REJECTED } from "../../constants.js"

export const requestSlice = createSlice({
  name: "request",
  initialState: {},
  selectors: {
    selectIsLoading: (state, id) => state[id] === "pending",
    selectRequestStatus: (state, id) => state[id] || "idle"
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(
        ({ type }) => type.endsWith("pending"),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_STATUS_PENDING
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("rejected"),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_STATUS_REJECTED
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("fulfilled"),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_STATUS_FULFILLED
        }
      )
})

export const { selectIsLoading, selectRequestStatus } = requestSlice.selectors