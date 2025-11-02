import { apiDomain } from "../config.js"


export const getDishByDishId = async (dishId) => {
  const result = await fetch(`${apiDomain}/api/dish/${ dishId }`)
  return result.json()
}
