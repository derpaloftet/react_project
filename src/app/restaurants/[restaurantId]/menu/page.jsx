import MenuPage from "../../../../components/pages/MenuPage.jsx"

async function RestaurantMenuPage({ params }) {
  const { restaurantId } = await params
  return <MenuPage restaurantId={ restaurantId } />
}

export default RestaurantMenuPage