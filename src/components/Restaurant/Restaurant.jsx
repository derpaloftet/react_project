import { Menu } from "../Menu/Menu.jsx"
import { Reviews } from "../Reviews/Reviews.jsx"
import { ReviewForm } from "../ReviewForm/ReviewForm.jsx"
import { UserContext } from "../User-context/index.js"
import { use } from "react"

import styles from "./Restaurant.module.css"

export function Restaurant({ name, menuIds, reviewsIds }) {
  const { currentUser } = use(UserContext)
  return (
    <div className={ styles.root }>
      <h2 className={ styles.name }>{ name }</h2>
      <Menu menuIds={ menuIds } />
      <Reviews reviewsIds={ reviewsIds } />
      { currentUser && <ReviewForm restaurantName={ name } key={ name } /> }
    </div>
  )
}