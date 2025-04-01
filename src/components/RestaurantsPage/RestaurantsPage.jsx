import { useState } from "react"
import { selectRestaurantIds } from "../../redux/entities/restaurant/slice.js"
import { RestaurantTabContainer } from "../RestaurantTab-container/RestaurantTab-container.jsx"
import { useSelector } from "react-redux"

import styles from "./RestaurantsPage.module.css"
import { Outlet } from "react-router"
import { Tab } from "../Tab/Tab.jsx"

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
            <Tab key={ id }>
              <RestaurantTabContainer
                id={ id }
                isActive={ activeRestaurant === id }
                onClickHandler={ () => handleSetActiveRestaurantId(id) } />
            </Tab>))
          : null }
      </div>
      <Outlet />
    </>
  )
}

//<RestaurantContainer key={ activeRestaurant } id={ activeRestaurant } />