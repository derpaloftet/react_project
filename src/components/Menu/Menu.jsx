import { DishContainer } from "../Dish/Dish-container.jsx"
import { useSelector } from "react-redux"
import { selectRestaurantById } from "../../redux/entities/restaurant/slice.js"

import styles from "./Menu.module.css"

export function Menu({ restaurantId }) {

  const { menu } = useSelector((state) => selectRestaurantById(state, restaurantId))

  if (!restaurantId) {
    return null
  }

  return (
    <div className={ styles.root }>
      <h3 className={ styles.menuHeader }>Menu</h3>
      <ul className={ styles.menuList }>
        { menu.length ? menu.map((id) => (
          <li className={ styles.menuItem } key={ id }><DishContainer id={ id } /></li>
        )) : null }
      </ul>
    </div>
  )
}