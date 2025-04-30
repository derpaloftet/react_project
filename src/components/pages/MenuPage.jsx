import MenuContainer from "../Menu/MenuContainer.js"
import { Suspense } from "react"

async function MenuPage({ restaurantId }) {

  return (
    <div>
      <Suspense fallback="loading...">
        <MenuContainer restaurantId={ restaurantId } />
      </Suspense>
    </div>)
}

export default MenuPage