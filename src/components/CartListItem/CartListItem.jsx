"use client"

import { useSelector } from "react-redux"
import { DishCounter } from "../Dishes-counter/Dish-counter.jsx"

import styles from "./CartListItem.module.css"
import { selectAmountByDishId } from "../../redux/entities/cart/slice.js"

export function CartListItem({ dishId, dishName }) {
  const amount = useSelector((state) => selectAmountByDishId(state, dishId)) || 0

  return (
    <li className={ styles.cartItem }>
      <div className={ styles.dish }>
        { dishName } - { amount }
      </div>
      <DishCounter id={ dishId } />
    </li>
  )
}