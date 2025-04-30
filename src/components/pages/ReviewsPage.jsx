"use client"

import { Reviews } from "../Reviews/Reviews.jsx"
import { ReviewForm } from "../ReviewForm/ReviewForm.jsx"
import { use } from "react"
import { UserContext } from "../User-context/index.js"
import { addReviewAction } from "../../actions/add-review-action.js"

export function ReviewsPage({ restaurantId, reviews }) {
  const { currentUser } = use(UserContext)

  const handleSubmit = async (state, formData) => {
    if (formData === null) {
      return {
        text: "updated 1 form data",
        rating: 1
      }
    }

    const text = formData.get("text")
    const rating = formData.get("rating")

    const review = { text, rating, userId: currentUser.id }
    await addReviewAction({ restaurantId: restaurantId, review })

    return {
      text: "updated 2 form data",
      rating: 1
    }
  }

  return (
    <>
      <Reviews reviews={ reviews } />
      { currentUser && <ReviewForm onSubmit={ handleSubmit }
                                   currentUser={ currentUser } /> }
    </>)
}
