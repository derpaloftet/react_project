import { apiDomain } from "../config.js"

export const getDishes = async () => {
  const result = await fetch(`${apiDomain}/api/dishes`,
    {
      next: {
        revalidate: 3600
      }
    })
  return result.json()
}
