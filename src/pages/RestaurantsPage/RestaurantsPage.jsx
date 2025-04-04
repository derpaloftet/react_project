import { useState } from "react"
import { selectRestaurantsId } from "../../redux/entities/restaurant/slice.js"
import { RestaurantTabContainer } from "../../components/RestaurantTab-container/RestaurantTab-container.jsx"
import { useSelector } from "react-redux"
import { Outlet } from "react-router"
import { getRestaurants } from "../../redux/entities/restaurant/get-restaurants.js"
import { useRequest } from "../../redux/hooks/use-request.js"

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

  if (requestStatus === "idle" || requestStatus === "pending") {
    return "loading..."
  }

  if (requestStatus === "rejected") {
    return "error"
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