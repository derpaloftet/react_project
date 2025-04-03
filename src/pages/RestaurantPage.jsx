import { RestaurantContainer } from "../components/Restaurant/Restaurant-container.jsx"
import { useParams } from "react-router"

export default function RestaurantPage() {
  const { restaurantId } = useParams()
  return (
    <div>
      <RestaurantContainer id={ restaurantId } />
    </div>)
}