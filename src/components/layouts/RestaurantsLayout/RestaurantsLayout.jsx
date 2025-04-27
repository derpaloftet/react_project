import { Suspense } from "react"
import RestaurantsContainer from "../../Restaurants/RestaurantsContainer.js"

export async function RestaurantsLayout({ children }) {

  return (
    <Suspense fallback='...loading'>
      <RestaurantsContainer />
      { children }
    </Suspense>
  )
}