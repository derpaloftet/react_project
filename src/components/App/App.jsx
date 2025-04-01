import { Layout } from "../Layout/Layout.jsx"
import { RestaurantsPage } from "../RestaurantsPage/RestaurantsPage.jsx"
import "./App.css"
import { ThemeContext } from "../Theme-context/Theme-context.jsx"
import { UserContext } from "../User-context/User-context.jsx"
import { Provider } from "react-redux"
import { store } from "../../redux/store.js"
import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import { HomePage } from "../../pages/HomePage.jsx"
import { NotFound } from "../NotFound/NotFound.jsx"
import RestaurantPage from "../../pages/RestaurantPage.jsx"
import { Menu } from "../Menu/Menu.jsx"
import { Reviews } from "../Reviews/Reviews.jsx"

export function App() {
  return (
    <Provider store={ store }>
      <ThemeContext>
        <UserContext>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={ <Layout /> }>
                <Route index element={ <HomePage /> } />
                <Route path="/restaurants" element={ <RestaurantsPage /> }>
                  <Route path=":restaurantId" element={ <RestaurantPage /> } >
                    <Route index element={ <Navigate to="menu" replace /> } />
                    <Route path="menu" element={ <Menu /> } />
                    <Route path="reviews" element={ <Reviews /> } />
                  </Route>
                </Route>
              </Route>
              <Route path="*" element={ <NotFound /> } />
            </Routes>
          </BrowserRouter>
        </UserContext>
      </ThemeContext>
    </Provider>
  )
}