import { Tab } from "../Tab/Tab.jsx"
import { NavLink, Outlet } from "react-router"

import styles from "./Restaurant.module.css"

export function Restaurant({ name }) {
  return (
    <div className={ styles.root }>
      <h2 className={ styles.name }>{ name }</h2>
      <Tab><NavLink to="./menu">Menu</NavLink></Tab>
      <Tab><NavLink to="./reviews">Reviews</NavLink></Tab>
      <Outlet />
    </div>
  )
}