import { DishCounter } from "../Dishes-counter/Dish-counter.jsx"
import { use } from "react"
import { UserContext } from "../User-context/index.js"

import styles from "./Dish.module.css"
import { useParams } from "react-router"
import { useSelector } from "react-redux"
import { selectDishById } from "../../redux/entities/dish/slice.js"

export function Dish() {

  const { dishId } = useParams()

  const dish = useSelector((state) => selectDishById(state, dishId))

  if (!dish) {
    return null
  }
  const { name, price, ingredients } = dish


  const { currentUser } = use(UserContext)
  return (
    <div>
      <h3 className={ styles.name }>{ name }</h3>
      <div className={ styles.dish }>
        <div>Price: { price }€</div>
        <div>Ingredients:</div>
        <ul className={ styles.ingredients }>
          { ingredients.length ? ingredients.map((ingredient) =>
            <li key={ ingredient }>
              { ingredient }
            </li>
          ) : null }
        </ul>
        { currentUser && <DishCounter id={ dishId } /> }
      </div>
    </div>
  )
}