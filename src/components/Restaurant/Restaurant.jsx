import { Menu } from "../Menu/Menu.jsx"
import { Reviews } from "../Reviews/Reviews.jsx"
import { ReviewForm } from "../ReviewForm/ReviewForm.jsx"
import { UserContext } from "../User-context/index.js"
import { use } from "react"

import styles from "./Restaurant.module.css"
import { Tab } from "../Tab/Tab.jsx"
import { NavLink, Outlet } from "react-router"

export function Restaurant({ name, menuIds, reviewsIds }) {
  return (
    <div className={ styles.root }>
      <h2 className={ styles.name }>{ name }</h2>
      <Tab><NavLink to="./menu">Menu</NavLink></Tab>
      <Tab><NavLink to="./reviews">Reviews</NavLink></Tab>
      <Outlet />
    </div>
  )
}

/*

  const { currentUser } = use(UserContext)

 --------------------<br />
      --------------------<br />
      Remains from the past:
      <Menu menuIds={ menuIds } />
      <Reviews reviewsIds={ reviewsIds } />
      { currentUser && <ReviewForm restaurantName={ name } key={ name } /> }


 */