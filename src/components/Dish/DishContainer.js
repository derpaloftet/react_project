import { getDishByDishId } from "../../services/get-dish-by-dish-id.js"
import { Dish } from "./Dish.jsx"

export default async function DishContainer({ dishId }) {
  const dish = await getDishByDishId(dishId)

  if (!dish) {
    return null
  }
  return <Dish dishId={ dishId } dish={ dish } />
}