import { useSelector } from "react-redux"
import { selectDishById } from "../../redux/entities/dish/slice.js"
import { Dish } from "./Dish.jsx"

export function DishContainer({ id }) {
  const dish = useSelector((state) => selectDishById(state, id))

  if (!dish) {
    return null
  }
  const { name, price, ingredients } = dish
  return <Dish id={ id } name={ name } price={ price } ingredients={ ingredients } />
}