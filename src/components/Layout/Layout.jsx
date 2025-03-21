import { Header } from "../Header/Header.jsx"
import { Footer } from "../Footer/Footer.jsx"
import { ProgressBar } from "../ProgressBar/ProgressBar.jsx"

import styles from "./Layout.module.css"

export function Layout({ children }) {
  return (
    <div className={ styles.appContainer }>
      <ProgressBar />
      <Header />
      <section>{ children }</section>
      <Footer />
    </div>
  )
}