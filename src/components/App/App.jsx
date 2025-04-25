"use client"

import { Layout } from "../Layout/Layout.jsx"
import { ThemeContext } from "../Theme-context/Theme-context.jsx"
import { UserContext } from "../User-context/User-context.jsx"
import { Provider } from "react-redux"
import { store } from "../../redux/store.js"
import "./App.css"

export function App({ children }) {
  return (
    <Provider store={ store }>
      <ThemeContext>
        <UserContext>
          <Layout>{ children }</Layout>
        </UserContext>
      </ThemeContext>
    </Provider>
  )
}

export default App