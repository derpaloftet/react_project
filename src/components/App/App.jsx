import { Layout } from "../Layout/Layout.jsx"
import { ThemeContext } from "../Theme-context/Theme-context.jsx"
import { UserContext } from "../User-context/User-context.jsx"
import { ReduxProvider } from "../../redux/provider.js"
import "./App.css"

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