import { ReviewsPage } from "../pages/ReviewsPage.jsx"
import { getUsers } from "../../services/get-users.js"
import { getReviewsByRestaurantId } from "../../services/get-reviews-by-restaurant-id.js"
import { UsersContextProvider } from "../Users-context/users-context.jsx"

export default async function ReviewsContainer({ restaurantId }) {
  const reviews = await getReviewsByRestaurantId(restaurantId)
  const users = await getUsers()

  if (!reviews.length || !users.length) {
    return null
  }

  return (<UsersContextProvider users={ users }>
      <ReviewsPage restaurantId={ restaurantId } reviews={ reviews } />
    </UsersContextProvider>)
}