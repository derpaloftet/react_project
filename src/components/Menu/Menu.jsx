import styles from "./Menu.module.css"
import { DishContainer } from "../Dish/Dish-container.jsx"
import { useParams } from "react-router"
import { useSelector } from "react-redux"
import { selectRestaurantById } from "../../redux/entities/restaurant/slice.js"

export function Menu() {
  const { restaurantId } = useParams()
  const { menu } = useSelector((state) => selectRestaurantById(state, restaurantId))

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