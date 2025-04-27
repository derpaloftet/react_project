import { Layout } from "../Layout/Layout.jsx"
import { ThemeContext } from "../Theme-context/Theme-context.jsx"
import { UserContext } from "../User-context/User-context.jsx"
import "./App.css"
import { ReduxProvider } from "../../redux/provider.js"

export function App({ children }) {
  return (
    <ReduxProvider>
      <ThemeContext>
        <UserContext>
          <Layout>{ children }</Layout>
        </UserContext>
      </ThemeContext>
    </ReduxProvider>
  )
}

export default App