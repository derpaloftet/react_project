import { Header } from "../Header/Header.jsx"
import { Footer } from "../Footer/Footer.jsx"
import { ProgressBar } from "../ProgressBar/ProgressBar.jsx"
import { Cart } from "../Cart/Cart.jsx"

import styles from "./Layout.module.css"
import { Outlet } from "react-router"

export function Layout() {
  return (
    <div className={ styles.appLayout }>
      <ProgressBar />
      <Header />
      <main className={ styles.main }><Outlet /></main>
      <aside className={ styles.aside }><Cart /></aside>
      <Footer />
    </div>
  )
}