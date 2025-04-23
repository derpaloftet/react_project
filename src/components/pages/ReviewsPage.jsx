"use client"

import { Reviews } from "../Reviews/Reviews.jsx"
import { useGetReviewsByRestaurantIdQuery, useGetUsersQuery } from "../../redux/services/api.js"

export function ReviewsPage({ restaurantId }) {
  const {
    data: reviews, isFetching: isReviewsLoading,
    isError: isReviewsError
  } = useGetReviewsByRestaurantIdQuery(restaurantId)

  const { isLoading: isUsersLoading, isError: isUsersError } = useGetUsersQuery()

  const isLoading = isUsersLoading || isReviewsLoading
  const isError = isUsersError || isReviewsError

  if (isLoading) {
    return "Loading..."
  }
  if (isError) {
    return "ERROR"
  }

  return (
    <div>
      <Reviews reviews={ reviews } />
    </div>)
}
