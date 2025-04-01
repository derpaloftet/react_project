import { TabLink } from "../TabLink/TabLink.jsx"
import { Outlet } from "react-router"

import styles from "./Restaurant.module.css"

export function Restaurant({ name }) {
  return (
    <div className={ styles.root }>
      <h2 className={ styles.name }>{ name }</h2>
      <div className={ styles.tabs }>
        <TabLink to="./menu" name={ "Menu" } />
        <TabLink to="./reviews" name={ "Reviews" } />
      </div>
      <Outlet />
    </div>
  )
}