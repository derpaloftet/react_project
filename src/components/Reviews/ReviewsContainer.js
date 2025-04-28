import { ReviewsPage } from "../pages/ReviewsPage.jsx"
import { getUsers } from "../../services/get-users.js"
import { getReviewsByRestaurantId } from "../../services/get-reviews-by-restaurant-id.js"

export default async function ReviewsContainer({ restaurantId }) {
  let reviews = await getReviewsByRestaurantId(restaurantId)
  const users = await getUsers()

  if (!reviews.length || !users.length) {
    return null
  }

  reviews = reviews.map((review) => {
    const user = users.find(({ id }) => review.userId === id)
    if (!user) {
      return review
    }
    review.userName = user.name
    return review
  })

  return <ReviewsPage restaurantId={ restaurantId } reviews={ reviews } />
}