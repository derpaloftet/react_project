import { Layout } from "../Layout/Layout.jsx"
import { RestaurantsPage } from "../RestaurantsPage/RestaurantsPage.jsx"
import "./App.css"
import { ThemeContext } from "../Theme-context/Theme-context.jsx"
import { UserContext } from "../User-context/User-context.jsx"

export function App() {
  return (
    <ThemeContext>
      <UserContext>
        <Layout>
          <RestaurantsPage />
        </Layout>
      </UserContext>
    </ThemeContext>
  )
}
