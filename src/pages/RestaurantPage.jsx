import { useParams } from "react-router"
import { useGetRestaurantByIdQuery } from "../redux/services/api.js"
import { Restaurant } from "../components/Restaurant/Restaurant.jsx"

export default function RestaurantPage() {
  const { restaurantId } = useParams()
  const { name, isLoading, isError } = useGetRestaurantByIdQuery(restaurantId)

  if (isLoading) {
    return "Loading..."
  }
  if (isError) {
    return "ERROR"
  }

  return (
    <div>
      <Restaurant name={ name } />
    </div>)
}