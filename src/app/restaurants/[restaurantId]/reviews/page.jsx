import { ReviewsPage } from "../../../../components/pages/ReviewsPage.jsx"

async function RestaurantReviewsPage({ params }) {
  const { restaurantId } = await params

  return <ReviewsPage restaurantId={ restaurantId } />
}

export default RestaurantReviewsPage