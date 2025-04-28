"use client"

import { useSelector } from "react-redux"
import { selectCartItems } from "../../redux/entities/cart/slice.js"

import styles from "./Cart.module.css"
import { CartListItem } from "../CartListItem/CartListItem.jsx"

function getDishNamById(dishes, dishId) {
  let dish = dishes.find(dish => dish.id === dishId)
  if (!dish) {
    return null
  }
  return dish.name
}

export function Cart({ dishes }) {
  const items = useSelector(selectCartItems)

  if (!items.length) {
    return (
      <div className={ styles.root }>
        <div className={ styles.cart }>Cart:</div>
        <div>You haven&#39;t added any items to your cart yet!</div>
      </div>
    )
  }

  return (
    <div className={ styles.root }>
      <div className={ styles.cart }>Cart:</div>
      <ul className={ styles.items }>
        { items.map((id) => (
          <CartListItem key={ id } dishId={ id } dishName={ getDishNamById(dishes, id) } />
        )) }
      </ul>
    </div>
  )
}
