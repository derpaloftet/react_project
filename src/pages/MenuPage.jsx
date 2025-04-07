import { useParams } from "react-router"
import { Menu } from "../components/Menu/Menu.jsx"
import { useRequest } from "../redux/hooks/use-request.js"
import { getDishesByRestaurantId } from "../redux/entities/dish/get-dishes.js"
import { REQUEST_STATUS_IDLE, REQUEST_STATUS_PENDING, REQUEST_STATUS_REJECTED } from "../redux/constants.js"

export default function MenuPage() {
  const { restaurantId } = useParams()
  if (!restaurantId) {
    return null
  }

  const requestStatus = useRequest(getDishesByRestaurantId, restaurantId)
  if (requestStatus === REQUEST_STATUS_PENDING || requestStatus === REQUEST_STATUS_IDLE) {
    return "Loading..."
  }
  if (requestStatus === REQUEST_STATUS_REJECTED) {
    return "ERROR"
  }

  return (
    <div>
      <Menu restaurantId={ restaurantId } />
    </div>)
}