import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  tagTypes: ["reviews"],
  endpoints: (builder) => ({
    getRestaurantById: builder.query({
      query: (restaurantId) => `/restaurant/${ restaurantId }`
    }),
    getUsers: builder.query({
      query: () => "/users"
    }),
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId) => `reviews?restaurantId=${ restaurantId }`,
      providesTags: [{ type: "reviews", id: "all" }]
    }),
    addReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        url: `/review/${ restaurantId }`,
        body: review,
        method: "POST"
      }),
      invalidatesTags: [{ type: "reviews", id: "all" }]
    })
  })
})

export const {
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
  useAddReviewMutation
} = api



