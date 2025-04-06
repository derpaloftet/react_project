import { DishContainer } from "../Dish/Dish-container.jsx"
import { useSelector } from "react-redux"
import styles from "./Menu.module.css"
import { selectRestaurantById } from "../../redux/entities/restaurants/slice.js"

export function Menu({ restaurantId }) {
  if (!restaurantId) {
    return null
  }
  const { menu } = useSelector((state) => selectRestaurantById(state, restaurantId))

  return (
    <div className={ styles.root }>
      <h3 className={ styles.menuHeader }>Menu</h3>
      <ul className={ styles.menuList }>
        { menu?.length ? menu.map((id) => (
          <li className={ styles.menuItem } key={ id }><DishContainer id={ id } /></li>
        )) : null }
      </ul>
    </div>
  )
}