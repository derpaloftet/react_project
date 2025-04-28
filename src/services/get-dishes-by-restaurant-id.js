export const getDishesByRestaurantId = async (restaurantId) => {
  const result = await fetch(`http://localhost:3001/api/dishes?restaurantId=${ restaurantId }`,
    {
      next: {
        revalidate: 3600
      }
    })
  return result.json()
}
