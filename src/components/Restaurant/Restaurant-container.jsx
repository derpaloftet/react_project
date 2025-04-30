import { Restaurant } from "./Restaurant.jsx"
import { getRestaurants } from "../../services/get-restaurants.js"

export async function RestaurantContainer({ id }) {

  const restaurants = await getRestaurants()

  const restaurant = restaurants.find(
    ({ id: restaurantId }) => restaurantId === id
  )

  if (!restaurant) {
    return null
  }

  return <Restaurant restaurantId={ id }
                     restaurantName={ restaurant.name }
  />
}