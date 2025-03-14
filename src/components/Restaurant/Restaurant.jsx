import { Menu } from "../Menu/Menu.jsx"
import { Reviews } from "../Reviews/Reviews.jsx"
import { ReviewForm } from "../ReviewForm/ReviewForm.jsx"

export function Restaurant({ restaurant: { name, menu, reviews } }) {
  return (
    <>
      <h2>{ name }</h2>
      <Menu menu={ menu } />
      <Reviews reviews={ reviews } />
      <ReviewForm restaurantName={ name } key={ name } />
    </>
  )
}