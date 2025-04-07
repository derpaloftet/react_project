import { useParams } from "react-router"
import { Dish } from "../components/Dish/Dish.jsx"
import { useRequest } from "../redux/hooks/use-request.js"
import { REQUEST_STATUS_PENDING, REQUEST_STATUS_REJECTED } from "../redux/constants.js"
import { getDishById } from "../redux/entities/dish/get-dish.js"

export function DishPage() {

  const { dishId } = useParams()

  const requestStatus = useRequest(getDishById, dishId)
  if (requestStatus === REQUEST_STATUS_PENDING) {
    return "Loading..."
  }
  if (requestStatus === REQUEST_STATUS_REJECTED) {
    return "ERROR"
  }

  return (<Dish dishId={ dishId } />)
}