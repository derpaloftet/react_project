import DishContainer from "../Dish/DishContainer.js"
import { Suspense } from "react"

export function DishPage({ dishId }) {
  return <Suspense fallback="...loading">
    <DishContainer dishId={ dishId } />
  </Suspense>
}