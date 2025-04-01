import { useSelector } from "react-redux"
import { selectRestaurantById } from "../../redux/entities/restaurant/slice.js"
import { NavLink } from "react-router"

export function RestaurantTabContainer({ id, isActive, onClickHandler }) {
  const restaurant = useSelector((state) => selectRestaurantById(state, id))

  if (!restaurant) {
    return null
  }
  const { name } = restaurant
  return <NavLink to={ id }>{ name }</NavLink>
}


//   return <Tab id={ id } text={ name } onClickHandler={ onClickHandler } isActive={ isActive } />