import { RestaurantContainer } from "../components/Restaurant/Restaurant-container.jsx"
import { useParams } from "react-router"
import { useRequest } from "../redux/hooks/use-request.js"
import { REQUEST_STATUS_PENDING, REQUEST_STATUS_REJECTED } from "../redux/constants.js"
import { getRestaurantById } from "../redux/entities/restaurants/get-restaurant.js"

export default function RestaurantPage() {
  const { restaurantId } = useParams()

  const requestStatus = useRequest(getRestaurantById, restaurantId)
  if (requestStatus === REQUEST_STATUS_PENDING) {
    return "Loading..."
  }
  if (requestStatus === REQUEST_STATUS_REJECTED) {
    return "ERROR"
  }

  return (
    <div>
      <RestaurantContainer id={ restaurantId } />
    </div>)
}