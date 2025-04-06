import { useState } from "react"
import { Outlet } from "react-router"
import { useSelector } from "react-redux"
import { selectRestaurantsId } from "../../redux/entities/restaurants/slice.js"
import { RestaurantTabContainer } from "../../components/RestaurantTab-container/RestaurantTab-container.jsx"
import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants.js"
import { useRequest } from "../../redux/hooks/use-request.js"
import { REQUEST_STATUS_PENDING, REQUEST_STATUS_REJECTED } from "../../redux/constants.js"

import styles from "./RestaurantsPage.module.css"

export function RestaurantsPage() {
  const requestStatus = useRequest(getRestaurants)

  const restaurantsIds = useSelector(selectRestaurantsId)

  const [activeRestaurant, setActiveRestaurant] = useState(restaurantsIds[0])
  const handleSetActiveRestaurantId = (id) => {
    if (activeRestaurant === id) {
      return
    }
    setActiveRestaurant(id)
  }

  if (requestStatus === REQUEST_STATUS_PENDING) {
    return "Loading..."
  }
  if (requestStatus === REQUEST_STATUS_REJECTED) {
    return "ERROR"
  }

  return (
    <>
      <div className={ styles.tabs }>
        { restaurantsIds.length ? restaurantsIds.map((id) => (
            <RestaurantTabContainer
              id={ id }
              key={ id }
              isActive={ activeRestaurant === id }
              onClickHandler={ () => handleSetActiveRestaurantId(id) }
            />
          ))
          : null }
      </div>
      <Outlet />
    </>
  )
}