import { User } from "../User/user.jsx"

import styles from "./Review.module.css"

export function Review({ rating, text, userId }) {

  return (
    <li className={ styles.root }>
      <div className={ styles.user }><User id={ userId }></User></div>
      <div className={ styles.rating }>{ "★".repeat(rating) }{ "☆".repeat(5 - rating) }</div>
      <div className={ styles.reviewText }>&#34;{ text }&#34;</div>
    </li>
  )
}