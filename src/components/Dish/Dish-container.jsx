import { useSelector } from "react-redux"
import { selectDishById } from "../../redux/entities/dish/slice.js"
import { TabLink } from "../TabLink/TabLink.jsx"

export function DishContainer({ id }) {
  const dish = useSelector((state) => selectDishById(state, id))

  const { name } = dish
  return (
    <>
      <TabLink to={ `/dish/${ dish.id }` } name={ name }>{ name }</TabLink>
    </>
  )
}