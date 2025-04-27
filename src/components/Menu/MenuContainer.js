import { getDishesByRestaurantId } from "../../services/get-dishes-by-restaurant-id.js"
import { Menu } from "./Menu.jsx"

export default async function MenuContainer({ restaurantId }) {
  const menu = await getDishesByRestaurantId(restaurantId)

  if (!restaurantId) {
    return null
  }
  return <Menu restaurantId={ restaurantId } menu={ menu } />
}