import { Layout } from "../Layout/Layout.jsx"
import { RestaurantsPage } from "../RestaurantsPage/RestaurantsPage.jsx"
import "./App.css"
import { ThemeContext } from "../Theme-context/Theme-context.jsx"

export function App() {
  return (
    <ThemeContext>
      <Layout>
        <RestaurantsPage />
      </Layout>
    </ThemeContext>
  )
}
