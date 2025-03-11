import { Menu } from "../Menu/Menu.jsx"
import { Reviews } from "../Reviews/Reviews.jsx"

export function Restaurant({ restaurant }) {
  const { name, menu, reviews } = restaurant
  return (
    <>
        <h2>{ name }</h2>
        <Menu menu={ menu } />
        <Reviews reviews={ reviews } />
    </>
  )
}