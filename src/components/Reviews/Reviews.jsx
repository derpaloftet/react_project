import { ReviewContainer } from "../Review/Review-container.jsx"
import { useParams } from "react-router"
import { useSelector } from "react-redux"
import { selectRestaurantById } from "../../redux/entities/restaurant/slice.js"
import { ReviewForm } from "../ReviewForm/ReviewForm.jsx"
import { UserContext } from "../User-context/index.js"
import { use } from "react"

import styles from "./Reviews.module.css"

export function Reviews() {
  const { restaurantId } = useParams()
  const { reviews } = useSelector((state) => selectRestaurantById(state, restaurantId))
  const { currentUser } = use(UserContext)

  return (
    <>
      <div className={ styles.root }>
        <h3 className={ styles.reviewsHeader }>Reviews</h3>
        <ul className={ styles.reviewsList }>
          { reviews.length ? reviews.map((review) =>
            <ReviewContainer key={ review } id={ review } />
          ) : null }
        </ul>
      </div>
      { currentUser && <ReviewForm restaurantName={ name } key={ name } /> }
    </>
  )
}