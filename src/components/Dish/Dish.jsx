import { DishCounter } from "./DishCounter.jsx"
import { use } from "react"
import { UserContext } from "../User-context/index.js"

export function Dish({ menu: { name, price, ingredients } }) {
  const { currentUser } = use(UserContext)
  return (
    <>
      <h3>{ name }</h3>
      <div>Price: { price }</div>
      <div>Ingredients:</div>
      <ul>
        { ingredients.length ? ingredients.map((ingredient) =>
          <li key={ ingredient }>
            { ingredient }
          </li>
        ) : null }
      </ul>
      { currentUser && <DishCounter /> }
    </>
  )
}