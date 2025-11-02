import { apiDomain } from "../config.js"

export const getUsers = async () => {
  const result = await fetch(`${apiDomain}/api/users`, {
    next: {
      revalidate: 3600
    }
  })
  return result.json()
}
