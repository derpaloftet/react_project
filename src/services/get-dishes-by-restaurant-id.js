export const getDishesByRestaurantId = async (restaurantId) => {
  const result = await fetch(`http://localhost:3001/api/dishes?restaurantId=${ restaurantId }`,
    {
      next: {
        revalidate: 100,
      }
    })
  return result.json()
}
