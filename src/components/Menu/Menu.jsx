import styles from "./Menu.module.css"
import { DishContainer } from "../Dish/Dish-container.jsx"

export function Menu({ menuIds }) {
  return (
    <div className={ styles.root }>
      <h3 className={ styles.menuHeader }>Menu</h3>
      <ul className={ styles.menuList }>
        { menuIds.length ? menuIds.map((id) => (
          <li className={ styles.menuItem } key={ id }><DishContainer id={ id } /></li>
        )) : null }
      </ul>
    </div>
  )
}