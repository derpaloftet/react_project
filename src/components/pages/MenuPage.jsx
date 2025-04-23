"use client"

import { Menu } from "../Menu/Menu.jsx"
import { useGetDishesByRestaurantIdQuery } from "../../redux/services/api.js"

function MenuPage({ restaurantId }) {

  const { data, isLoading, isError } = useGetDishesByRestaurantIdQuery(restaurantId)

  if (!restaurantId) {
    return null
  }

  if (isLoading) {
    return "Loading..."
  }
  if (isError) {
    return "ERROR"
  }

  return (
    <div>
      <Menu restaurantId={ restaurantId } menu={ data } />
    </div>)
}

export default MenuPage