import { useSelector } from "react-redux"
import { selectRestaurantById } from "../../redux/entities/restaurant/slice.js"
import { Tab } from "../Tab/Tab.jsx"

export function RestaurantTabContainer({ id, isActive, onClickHandler }) {
  const restaurant = useSelector((state) => selectRestaurantById(state, id))

  if (!restaurant) {
    return null
  }
  const { name } = restaurant
  return <Tab id={ id } text={ name } onClickHandler={ onClickHandler } isActive={ isActive } />
}