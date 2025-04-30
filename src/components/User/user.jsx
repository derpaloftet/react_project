import { use } from "react"
import { UsersContext } from "../Users-context"

export const User = ({ id }) => {
  const users = use(UsersContext)

  const user = users.find(({ id: userId }) => userId === id)

  if (!user?.name) {
    return null
  }

  return <>{ user.name }</>
}
