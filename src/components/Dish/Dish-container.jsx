import { useSelector } from "react-redux"
import { selectDishById } from "../../redux/entities/dish/slice.js"
import { NavLink } from "react-router"

export function DishContainer({ id }) {
  const dish = useSelector((state) => selectDishById(state, id))

  if (!dish) {
    return null
  }
  const { name } = dish
  return (
    <>
      <NavLink to={ `/dish/${ dish.id }` }>{ name }</NavLink>
    </>
  )
}
