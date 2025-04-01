import { ReviewContainer } from "../Review/Review-container.jsx"

import styles from "./Reviews.module.css"
import { useParams } from "react-router"
import { useSelector } from "react-redux"
import { selectRestaurantById } from "../../redux/entities/restaurant/slice.js"

export function Reviews() {
  const { restaurantId } = useParams()
  const { reviews } = useSelector((state) => selectRestaurantById(state, restaurantId))

  return (
    <div className={ styles.root }>
      <h3 className={ styles.reviewsHeader }>Reviews</h3>
      <ul className={ styles.reviewsList }>
        { reviews.length ? reviews.map((review) =>
          <ReviewContainer key={ review } id={ review } />
        ) : null }
      </ul>
    </div>
  )
}