import { RestaurantContainer } from "../Restaurant/Restaurant-container.jsx"
import { Suspense } from "react"

export async function RestaurantPage({ children, params }) {
  const { restaurantId } = await params
  return (
    <Suspense fallback="...loading">
      <RestaurantContainer id={ restaurantId } />
      { children }
    </Suspense>
  )
}