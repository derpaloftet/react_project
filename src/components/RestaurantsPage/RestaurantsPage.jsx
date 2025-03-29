import { useState } from "react"
import { RestaurantContainer } from "../Restaurant/Restaurant-container.jsx"
import { selectRestaurantIds } from "../../redux/entities/restaurant/slice.js"
import { RestaurantTabContainer } from "../RestaurantTab-container/RestaurantTab-container.jsx"
import { useSelector } from "react-redux"

import styles from "./RestaurantsPage.module.css"

export function RestaurantsPage() {
  const restaurantsIds = useSelector((state) => selectRestaurantIds(state))
  const [activeRestaurant, setActiveRestaurant] = useState(restaurantsIds[0])
  const handleSetActiveRestaurantId = (id) => {
    if (activeRestaurant === id) {
      return
    }
    setActiveRestaurant(id)
  }
  return (
    <>
      <div className={ styles.tabs }>
        { restaurantsIds.length ? restaurantsIds.map((id) => (
            <RestaurantTabContainer
              key={ id }
              id={ id }
              isActive={ activeRestaurant === id }
              onClickHandler={ () => handleSetActiveRestaurantId(id) } />))
          : null }
      </div>
      <RestaurantContainer key={ activeRestaurant } id={ activeRestaurant } />
    </>
  )
}