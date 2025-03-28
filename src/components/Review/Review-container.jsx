import { useSelector } from "react-redux"
import { selectReviewById } from "../../redux/entities/review/slice.js"
import { Review } from "./Review.jsx"

export function ReviewContainer({ id }) {
  const review = useSelector((state) => selectReviewById(state, id))

  if (!review) {
    return null
  }

  const { rating, text, userId } = review
  return <Review userId={ userId } rating={ rating } text={ text } />
}