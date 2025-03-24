import { UserContext as UserProvider } from "./index.js"
import { useState } from "react"

const mockUserName = "John"

export function UserContext({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const logInUser = () => {
    setCurrentUser(mockUserName)
  }
  const logOutUser = () => {
    setCurrentUser(null)
  }
  return <UserProvider value={ { currentUser, logInUser, logOutUser } }>{ children }</UserProvider>
}