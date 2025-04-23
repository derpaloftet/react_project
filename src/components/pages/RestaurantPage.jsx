import { RestaurantContainer } from "../Restaurant/Restaurant-container.jsx"

export async function RestaurantPage({ children, params }) {
  const { restaurantId } = await params
  console.log("restaurantId", restaurantId)
  return (
    <div>
      <RestaurantContainer id={ restaurantId } />
      { children }
    </div>)
}