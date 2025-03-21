import { Header } from "../Header/Header.jsx"
import { Footer } from "../Footer/Footer.jsx"
import { ProgressBar } from "../ProgressBar/ProgressBar.jsx"

export function Layout({ children }) {
  return (
    <>
      <ProgressBar />
      <Header />
      <section>{ children }</section>
      <Footer />
    </>
  )
}