import { ToggleTheme } from "../Toggle-theme/Toggle-theme.jsx"
import { LogInUser } from "../LogInUser/LogInUser.jsx"

export function Header() {
  return (
    <header>
      <div>Header</div>
      <ToggleTheme />
      <LogInUser />
    </header>
  )
}