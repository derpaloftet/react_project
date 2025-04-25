"use client"

import { Reviews } from "../Reviews/Reviews.jsx"
import { useAddReviewMutation, useGetReviewsByRestaurantIdQuery, useGetUsersQuery } from "../../redux/services/api.js"
import { ReviewForm } from "../ReviewForm/ReviewForm.jsx"
import { use } from "react"
import { UserContext } from "../User-context/index.js"

export function ReviewsPage({ restaurantId }) {
  const { currentUser } = use(UserContext)
  const {
    data: reviews, isFetching: isReviewsLoading,
    isError: isReviewsError
  } = useGetReviewsByRestaurantIdQuery(restaurantId)

  const { isLoading: isUsersLoading, isError: isUsersError } = useGetUsersQuery()

  const isLoading = isUsersLoading || isReviewsLoading
  const isError = isUsersError || isReviewsError

  const [addReview, { isLoading: isAddReviewLoading }] = useAddReviewMutation()

  const handleSubmit = (review) => {
    addReview({ restaurantId: restaurantId, review })
  }

  if (isLoading) {
    return "Loading..."
  }
  if (isError) {
    return "ERROR"
  }

  return (
    <>
      <Reviews reviews={ reviews } />
      { currentUser && <ReviewForm onSubmit={ handleSubmit }
                                   isSubmitButtonDisabled={ isAddReviewLoading }
                                   currentUser={ currentUser } /> }
    </>)
}
