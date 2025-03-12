import { restaurants } from "../../assets/mock.js"
import { Restaurant } from "../Restaurant/Restaurant.jsx"
import { Layout } from "../Layout/Layout.jsx"
import React from "react"
import { TabButton } from "../TabButton/TabButton.jsx"

export function App() {
  const [activeRestaurant, setActiveRestaurant] = React.useState(restaurants[0])
  return (
    <Layout>
      { restaurants.length ? restaurants.map((restaurant) => (
          <TabButton
            key={ restaurant.id }
            restaurant={ restaurant }
            onClickHandler={ () => setActiveRestaurant(restaurant) } />))
        : null }
      <Restaurant restaurant={ activeRestaurant } />
    </Layout>
  )
}
