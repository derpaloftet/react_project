import { Review } from "./Review.jsx"

export function ReviewContainer({ userName, rating, text }) {
  return <Review name={ userName } rating={ rating } text={ text } />
}