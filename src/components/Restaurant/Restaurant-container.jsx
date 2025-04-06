import { useSelector } from "react-redux"
import { selectRestaurantById } from "../../redux/entities/restaurants/slice.js"
import { Restaurant } from "./Restaurant.jsx"
import { NotFound } from "../NotFound/NotFound.jsx"

export function RestaurantContainer({ id }) {
  const restaurant = useSelector((state) => selectRestaurantById(state, id))

  if (!restaurant) {
    return <NotFound />
  }
  const { name, menu, reviews } = restaurant
  return <Restaurant name={ name } menuIds={ menu } reviewsIds={ reviews } />
}