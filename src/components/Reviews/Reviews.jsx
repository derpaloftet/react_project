import { ReviewContainer } from "../Review/Review-container.jsx"

import styles from "./Reviews.module.css"

export function Reviews({ reviewsIds }) {
  return (
    <div className={ styles.root }>
      <h3 className={ styles.reviewsHeader }>Reviews</h3>
      <ul className={ styles.reviewsList }>
        { reviewsIds.length ? reviewsIds.map((review) =>
          <ReviewContainer key={ review } id={ review } />
        ) : null }
      </ul>
    </div>
  )
}