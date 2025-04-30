export const getReviewsByRestaurantId = async (restaurantId) => {
  const result = await fetch(`http://localhost:3001/api/reviews?restaurantId=${ restaurantId }`,
    {
      next: {
        revalidate: 3600,
        tags: ["getReviewsByRestaurantId"]
      }
    })
  return result.json()
}