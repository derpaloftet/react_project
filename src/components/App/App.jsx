import { Layout } from "../Layout/Layout.jsx"
import { RestaurantsPage } from "../../pages/RestaurantsPage/RestaurantsPage.jsx"
import "./App.css"
import { ThemeContext } from "../Theme-context/Theme-context.jsx"
import { UserContext } from "../User-context/User-context.jsx"
import { Provider } from "react-redux"
import { store } from "../../redux/store.js"
import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import { HomePage } from "../../pages/HomePage/HomePage.jsx"
import { NotFound } from "../NotFound/NotFound.jsx"
import RestaurantPage from "../../pages/RestaurantPage.jsx"
import { Reviews } from "../Reviews/Reviews.jsx"
import { Dish } from "../Dish/Dish.jsx"
import MenuPage from "../../pages/MenuPage.jsx"

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
                  <Route path=":restaurantId" element={ <RestaurantPage /> }>
                    <Route index element={ <Navigate to="menu" replace /> } />
                    <Route path="menu" element={ <MenuPage /> } />
                    <Route path="reviews" element={ <Reviews /> } />
                  </Route>
                </Route>
                <Route path="dish/:dishId" element={ <Dish /> } />
              </Route>
              <Route path="*" element={ <NotFound /> } />
            </Routes>
          </BrowserRouter>
        </UserContext>
      </ThemeContext>
    </Provider>
  )
}