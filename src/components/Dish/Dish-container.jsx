import { TabLink } from "../TabLink/TabLink.jsx"
import { selectDishById } from "../../redux/entities/dish/slice.js"
import { useSelector } from "react-redux"

export function DishContainer({ id }) {
  const dish = useSelector((state) => selectDishById(state, id))
  if (!dish) {
    return null
  }

  const { name } = dish
  return (
    <>
      <TabLink to={ `/dish/${ dish.id }` } >{ name }</TabLink>
    </>
  )
}