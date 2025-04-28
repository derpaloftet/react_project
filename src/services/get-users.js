export const getUsers = async () => {
  const result = await fetch(`http://localhost:3001/api/users`, {
    next: {
      revalidate: 3600
    },
  })
  return result.json()
}
