import { Review } from "../Review/Review.jsx"

import styles from "./Reviews.module.css"

export function Reviews({ reviews }) {
  return (
    <div className={ styles.root }>
      <h3 className={ styles.reviewsHeader }>Reviews</h3>
      <ul className={ styles.reviewsList }>
        { reviews.length ? reviews.map((review) =>
          <Review key={ review.id } review={ review } />
        ) : null }
      </ul>
    </div>
  )
}