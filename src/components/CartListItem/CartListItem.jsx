import { useSelector } from "react-redux"
import { selectDishById } from "../../redux/entities/dish/slice.js"
import { DishCounter } from "../Dishes-counter/Dish-counter.jsx"

import styles from "./CartListItem.module.css"

export function CartListItem({ id, amount }) {
  const dish = useSelector((state) => selectDishById(state, id))
  const { name } = dish
  return (
    <li className={ styles.cartItem }>
      <div className={ styles.dish }>
        { name } - { amount }
      </div>
      <DishCounter id={ id } />
    </li>
  )
}