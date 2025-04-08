import { ReviewForm } from "../ReviewForm/ReviewForm.jsx"
import { UserContext } from "../User-context/index.js"
import { use } from "react"

import styles from "./Reviews.module.css"
import { Review } from "../Review/Review.jsx"

export function Reviews({ reviews, users }) {

  const { currentUser } = use(UserContext)

  return (
    <>
      <div className={ styles.root }>
        <h3 className={ styles.reviewsHeader }>Reviews</h3>
        <ul className={ styles.reviewsList }>
          { reviews.length ? reviews.map(({ id, userId, rating, text }) => {
            const user = users.find(user => user.id === userId)
            return <Review key={ id } rating={ rating } text={ text } name={ user.name } />}
          ) : null }
        </ul>
      </div>
      { currentUser && <ReviewForm restaurantName={ name } key={ name } /> }
    </>
  )
}
//name?