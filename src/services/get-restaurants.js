import { apiDomain } from "../config.js"

export const getRestaurants = async () => {
  const result = await fetch(`${apiDomain}/api/restaurants`, {
    next: {
      revalidate: 3600,
      tags: ["getRestaurants"]
    }
  })

  return result.json()
}
