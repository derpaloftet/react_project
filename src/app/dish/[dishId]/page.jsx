import { DishPage } from "../../../components/pages/DishPage.jsx"

async function RestaurantDishPage({ params }) {
  const { dishId } = await params
  return <DishPage dishId={ dishId } />
}

export default RestaurantDishPage