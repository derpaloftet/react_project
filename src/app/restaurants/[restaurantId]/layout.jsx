import { RestaurantPage } from "../../../components/pages/RestaurantPage.jsx"
import { getRestaurants } from "../../../services/get-restaurants.js"

export const generateMetadata = async ({ params }) => {
  const { restaurantId } = await params

  const restaurants = await getRestaurants()

  const restaurant = restaurants.find(({ id }) => restaurantId === id)

  return {
    title: restaurant.name
  }
}

export default RestaurantPage