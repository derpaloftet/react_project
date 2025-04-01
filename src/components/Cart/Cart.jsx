import { useSelector } from "react-redux"
import { selectCartItems } from "../../redux/entities/cart/slice.js"
import { CartListItem } from "../CartListItem/CartListItem.jsx"

import styles from "./Cart.module.css"

export function Cart() {
  const items = useSelector(selectCartItems)

  if (!items.length) {
    return null
  }

  return (
    <div className={ styles.root }>
      <div className={ styles.cart }>Cart:</div>
      <ul className={ styles.items }>
        { items.map(({ id, amount }) => (
          <CartListItem key={ id } id={ id } amount={ amount } />
        )) }
      </ul>
    </div>
  )
}
