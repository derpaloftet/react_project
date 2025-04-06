import { useSelector } from "react-redux"
import { selectRestaurantById } from "../../redux/entities/restaurants/slice.js"
import { Restaurant } from "./Restaurant.jsx"
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage.jsx"

export function RestaurantContainer({ id }) {
  const restaurant = useSelector((state) => selectRestaurantById(state, id))

  if (!restaurant) {
    return <NotFoundPage />
  }
  const { name, menu, reviews } = restaurant
  return <Restaurant name={ name } menuIds={ menu } reviewsIds={ reviews } />
}