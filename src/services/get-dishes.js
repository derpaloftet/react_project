export const getDishes = async () => {
  const result = await fetch(`http://localhost:3001/api/dishes`,
    {
      next: {
        revalidate: 3600
      }
    })
  return result.json()
}
