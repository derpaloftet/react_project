import { useParams } from "react-router"
import { Reviews } from "../components/Reviews/Reviews.jsx"
import { useRequest } from "../redux/hooks/use-request.js"
import { REQUEST_STATUS_IDLE, REQUEST_STATUS_PENDING, REQUEST_STATUS_REJECTED } from "../redux/constants.js"
import { getReviewsByRestaurantId } from "../redux/entities/review/get-reviews.js"

export function ReviewsPage() {
  const { restaurantId } = useParams()

  const requestStatus = useRequest(getReviewsByRestaurantId, restaurantId);
  if (requestStatus === REQUEST_STATUS_PENDING || requestStatus === REQUEST_STATUS_IDLE) {
    return "Loading...";
  }
  if (requestStatus === REQUEST_STATUS_REJECTED) {
    return "ERROR";
  }

  return (
    <div>
      <Reviews restaurantId={ restaurantId } />
    </div>)
}