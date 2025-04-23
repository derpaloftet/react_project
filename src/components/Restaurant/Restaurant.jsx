import { TabLink } from "../TabLink/TabLink.jsx"

import { ReviewForm } from "../ReviewForm/ReviewForm.jsx"
import { use } from "react"
import { UserContext } from "../User-context/index.js"

import styles from "./Restaurant.module.css"

export function Restaurant({ restaurantId, restaurantName, onSubmit, isSubmitButtonDisabled }) {
  const { currentUser } = use(UserContext)
  return (
    <div className={ styles.root }>
      <h2 className={ styles.name }>{ restaurantName }</h2>
      <div className={ styles.tabs }>
        <TabLink to={ `/restaurants/${restaurantId}/menu` }>Menu</TabLink>
        <TabLink to={ `/restaurants/${restaurantId}/reviews` }>Reviews</TabLink>
      </div>

      { currentUser && <ReviewForm onSubmit={ onSubmit }
                                   isSubmitButtonDisabled={ isSubmitButtonDisabled }
                                   currentUser={ currentUser } /> }
    </div>
  )
}