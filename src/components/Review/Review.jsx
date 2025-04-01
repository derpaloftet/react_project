import { useSelector } from "react-redux"
import { selectUserById } from "../../redux/entities/user/slice.js"

import styles from "./Review.module.css"

export function Review({ userId, rating, text }) {

  const user = useSelector((state) => selectUserById(state, userId))
  const { name } = user

  return (
    <li className={ styles.root }>
      <div className={ styles.user }>{ name }:</div>
      <div className={ styles.rating }>{ "★".repeat(rating) }{ "☆".repeat(5 - rating) }</div>
      <div className={ styles.reviewText }>&#34;{ text }&#34;</div>
    </li>
  )
}