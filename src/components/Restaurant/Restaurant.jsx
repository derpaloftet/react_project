import { TabLink } from "../TabLink/TabLink.jsx"

import styles from "./Restaurant.module.css"

export function Restaurant({ restaurantId, restaurantName }) {
  return (
    <div className={ styles.root }>
      <h2 className={ styles.name }>{ restaurantName }</h2>
      <div className={ styles.tabs }>
        <TabLink to={ `/restaurants/${ restaurantId }/menu` }>Menu</TabLink>
        <TabLink to={ `/restaurants/${ restaurantId }/reviews` }>Reviews</TabLink>
      </div>
    </div>
  )
}