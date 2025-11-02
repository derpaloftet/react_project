import { apiDomain } from "../config.js"

export const getReviewsByRestaurantId = async (restaurantId) => {
  const result = await fetch(`${apiDomain}/api/reviews?restaurantId=${ restaurantId }`,
    {
      next: {
        revalidate: 3600,
        tags: ["getReviewsByRestaurantId"]
      }
    })
  return result.json()
}