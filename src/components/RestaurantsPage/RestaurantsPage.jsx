import { restaurants } from "../../assets/mock.js"
import { TabButton } from "../TabButton/TabButton.jsx"
import { Restaurant } from "../Restaurant/Restaurant.jsx"
import { useState } from "react"

export function RestaurantsPage() {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0])
  return (
    <>
      { restaurants.length ? restaurants.map((restaurant) => (
          <TabButton
            key={ restaurant.id }
            text={ restaurant.name }
            onClickHandler={ () => setActiveRestaurant(restaurant) } />))
        : null }
      <Restaurant restaurant={ activeRestaurant } />
    </>
  )
}