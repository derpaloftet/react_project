"use client"

import { Restaurant } from "./Restaurant.jsx"
import { useGetRestaurantsQuery } from "../../redux/services/api.js"

export function RestaurantContainer({ id }) {
  const { data, isLoading } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find(({ id: restaurantId }) => restaurantId === id)
    })
  })

  const { name } = data

  if (isLoading) {
    return "...loading"
  }

  return <Restaurant restaurantId={ id }
                     restaurantName={ name }
  />
}