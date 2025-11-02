import { apiDomain } from "../config.js"

export const getDishesByRestaurantId = async (restaurantId) => {
  const result = await fetch(`${apiDomain}/api/dishes?restaurantId=${ restaurantId }`,
    {
      next: {
        revalidate: 3600
      }
    })
  return result.json()
}
