import { Menu } from "../Menu/Menu.jsx"
import { Reviews } from "../Reviews/Reviews.jsx"
import { ReviewForm } from "../ReviewForm/ReviewForm.jsx"
import { UserContext } from "../User-context/index.js"
import { use } from "react"

export function Restaurant({ restaurant: { name, menu, reviews } }) {
  const { currentUser } = use(UserContext)
  return (
    <>
      <h2>{ name }</h2>
      <Menu menu={ menu } />
      <Reviews reviews={ reviews } />
      { currentUser && <ReviewForm restaurantName={ name } key={ name } /> }
    </>
  )
}