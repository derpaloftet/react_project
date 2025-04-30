import { getDishes } from "../../services/get-dishes.js"
import { Cart } from "./Cart.jsx"

export default async function CartContainer() {
  const dishes = await getDishes()

  if (!dishes) {
    return null
  }
  return <Cart dishes={ dishes } />
}