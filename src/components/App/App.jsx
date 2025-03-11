import { restaurants } from "../../assets/mock.js"
import { Restaurant } from "../Restaurant/Restaurant.jsx"
import { Layout } from "../Layout/Layout.jsx"

export function App(){
  return (
    <Layout>
      { restaurants.map((restaurant) => {
        return <Restaurant
          key={ restaurant.id }
          restaurant={ restaurant } />
      }) }
    </Layout>
  )
}

