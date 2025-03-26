import { restaurants } from "../../assets/mock.js"
import { Tab } from "../Tab/Tab.jsx"
import { Restaurant } from "../Restaurant/Restaurant.jsx"
import { useState } from "react"

import styles from "./RestaurantsPage.module.css"

export function RestaurantsPage() {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0])
  return (
    <>
      <div className={ styles.tabs }>
        { restaurants.length ? restaurants.map((restaurant) => (

            <Tab
              key={ restaurant.id }
              text={ restaurant.name }
              isActive={ activeRestaurant.id === restaurant.id }
              onClickHandler={ () => setActiveRestaurant(restaurant) } />))
          : null }
      </div>
      <Restaurant restaurant={ activeRestaurant } />
      <Restaurant restaurant={ activeRestaurant } />
      <Restaurant restaurant={ activeRestaurant } />
    </>
  )
}