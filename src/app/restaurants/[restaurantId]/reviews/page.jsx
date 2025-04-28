import ReviewsContainer from "../../../../components/Reviews/ReviewsContainer.js"

async function RestaurantReviewsPage({ params }) {
  const { restaurantId } = await params

  return <ReviewsContainer restaurantId={ restaurantId } />
}

export default RestaurantReviewsPage