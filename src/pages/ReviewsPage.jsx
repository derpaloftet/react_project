import { useParams } from "react-router"
import { Reviews } from "../components/Reviews/Reviews.jsx"
import { useRequest } from "../redux/hooks/use-request.js"
import { REQUEST_STATUS_PENDING, REQUEST_STATUS_REJECTED } from "../redux/constants.js"
import { getReviewsByRestaurantId } from "../redux/entities/review/get-reviews.js"
import { getUsers } from "../redux/entities/user/get-users.js"

export function ReviewsPage() {
  const { restaurantId } = useParams()

  const requestReviewsStatus = useRequest(getReviewsByRestaurantId, restaurantId)
  const requestUsersStatus = useRequest(getUsers)

  if (requestReviewsStatus === REQUEST_STATUS_PENDING || requestUsersStatus === REQUEST_STATUS_PENDING) {
    return "Loading..."
  }
  if (requestReviewsStatus === REQUEST_STATUS_REJECTED || requestUsersStatus === REQUEST_STATUS_REJECTED) {
    return "ERROR"
  }

  return (
    <div>
      <Reviews restaurantId={ restaurantId } />
    </div>)
}