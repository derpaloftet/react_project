import { RestaurantContainer } from "../Restaurant/Restaurant-container.jsx"

export async function RestaurantPage({ children, params }) {
  const { restaurantId } = await params
  return (
    <>
      <RestaurantContainer id={ restaurantId } />
      { children }
    </>)
}