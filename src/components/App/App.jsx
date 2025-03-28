import { Layout } from "../Layout/Layout.jsx"
import { RestaurantsPage } from "../RestaurantsPage/RestaurantsPage.jsx"
import "./App.css"
import { ThemeContext } from "../Theme-context/Theme-context.jsx"
import { UserContext } from "../User-context/User-context.jsx"
import { Provider } from "react-redux"
import { store } from "../../redux/store.js"

export function App() {
  return (
    <Provider store={ store }>
    <ThemeContext>
      <UserContext>
        <Layout>
          <RestaurantsPage />
        </Layout>
      </UserContext>
    </ThemeContext>
    </Provider>
  )
}
