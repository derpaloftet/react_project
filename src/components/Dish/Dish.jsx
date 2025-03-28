import { DishCounter } from "./DishCounter.jsx"
import { use } from "react"
import { UserContext } from "../User-context/index.js"

import styles from "./Dish.module.css"

export function Dish({ name, price, ingredients }) {
  const { currentUser } = use(UserContext)
  return (
    <div>
      <h3 className={ styles.name }>{ name }</h3>
      <div className={ styles.dish }>
        <div>Price: { price }</div>
        <div>Ingredients:</div>
        <ul className={ styles.ingredients }>
          { ingredients.length ? ingredients.map((ingredient) =>
            <li key={ ingredient }>
              { ingredient }
            </li>
          ) : null }
        </ul>
        { currentUser && <DishCounter /> }
      </div>
    </div>
  )
}