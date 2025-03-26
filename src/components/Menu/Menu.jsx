import { Dish } from "../Dish/Dish.jsx"

import styles from "./Menu.module.css"

export function Menu({ menu }) {
  return (
    <div className={ styles.root }>
      <h3 className={ styles.menuHeader }>Menu</h3>
      <ul className={ styles.menuList }>
        { menu.length ? menu.map((menu) => (
          <li className={ styles.menuItem } key={ menu.id }><Dish menu={ menu } /></li>
        )) : null }
      </ul>
    </div>
  )
}