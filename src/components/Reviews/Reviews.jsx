import { Review } from "../Review/Review.jsx"

import styles from "./Reviews.module.css"

export function Reviews({ reviews }) {

  return (
    <>
      <div className={ styles.root }>
        <h3 className={ styles.reviewsHeader }>Reviews</h3>
        <ul className={ styles.reviewsList }>
          { reviews.length ? reviews.map(({ id, userId, rating, text }) => {
              return <Review key={ id } rating={ rating } text={ text } userId={ userId } />
            }
          ) : null }
        </ul>
      </div>
    </>
  )
}
