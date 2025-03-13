import { Review } from "../Review/Review.jsx"

export function Reviews({ reviews }) {
  return (
    <>
      <h3>Reviews</h3>
      <ul>
        { reviews.length ? reviews.map((review) =>
          <Review key={ review.id } review={ review } />
        ) : null }
      </ul>
    </>
  )
}