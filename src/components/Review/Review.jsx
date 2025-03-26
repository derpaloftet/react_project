import styles from "./Review.module.css"

export function Review({ review: { user, rating, text } }) {
  return (
    <li className={ styles.root }>
      <div className={ styles.user }>{ user }:</div>
      <div className={ styles.rating }>{ "★".repeat(rating) }{ "☆".repeat(5 - rating) }</div>
      <div className={ styles.reviewText }>&#34;{ text }&#34;</div>
    </li>
  )
}