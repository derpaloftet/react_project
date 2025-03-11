import { restaurants } from "./assets/mock.js"
import { createRoot } from "react-dom/client"

createRoot(document.getElementById("root")).render(
  <>
    { restaurants.map((restaurant) => {
      return (
        <div>
          <h1>{ restaurant.name }</h1>
          <h3>Menu</h3>
          <ul>
            { restaurant.menu.map((menu) => (
              <li>{ menu.name }</li>
            )) }
          </ul>
          <h3>Reviews</h3>
          <ul>
            { restaurant.reviews.map((review) => (
              <li>{ review.text }</li>
            )) }
          </ul>
        </div>
      )
    }) }
  </>
)
