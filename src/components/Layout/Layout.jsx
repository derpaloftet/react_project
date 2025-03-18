import { Header } from "../Header/Header.jsx"
import { Footer } from "../Footer/Footer.jsx"

export function Layout({ children }) {
  return (
    <>
      <Header />
      <section>{ children }</section>
      <Footer />
    </>
  )
}