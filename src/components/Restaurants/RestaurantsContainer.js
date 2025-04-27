import { TabLink } from "../TabLink/TabLink.jsx"
import { getRestaurants } from "../../services/get-restaurants.js"

import styles from "./RestaurantsContainer.module.css"

export default async function RestaurantsContainer() {
  const restaurants = await getRestaurants()
  if (!restaurants.length) {
    return null
  }

  return <div className={ styles.tabs }>
    { restaurants.length ? restaurants.map(({ id, name }) => (
        <TabLink key={ id } to={ `/restaurants/${ id }` } name={ name }>{ name }</TabLink>
      ))
      : null }
  </div>
}