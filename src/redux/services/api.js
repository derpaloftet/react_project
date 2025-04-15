import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  tagTypes: ["reviews"],
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => "/restaurants"
    }),
    getRestaurantById: builder.query({
      query: (restaurantId) => `/restaurant/${ restaurantId }`
    }),
    getDishesByRestaurantId: builder.query({
      query: (restaurantId) => `/dishes?restaurantId=${ restaurantId }`
    }),
    getDishById: builder.query({
      query: (dishId) => `/dish/${ dishId }`
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
  useGetRestaurantsQuery,
  useLazyGetRestaurantsQuery,
  useGetDishesByRestaurantIdQuery,
  useGetDishByIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
  useAddReviewMutation
} = api



