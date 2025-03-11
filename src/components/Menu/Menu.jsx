import { Dish } from "../Dish/Dish.jsx"

export function Menu({ menu }) {
  return (
    <>
      <h3>Menu</h3>
      <ul>
        { menu.map((menu) => (
          <li key={ menu.id }><Dish menu={ menu } /></li>
        )) }
      </ul>
    </>
  )
}