import { Link } from "react-router"

export function NotFound() {
  return (
    <div>
      <h1>Oops! Page Not Found 🧐</h1>
      <div>It looks like the page you're looking for doesn’t exist. It might have been moved, deleted, or maybe it never existed in the first place!</div>
      <div>Go back to the <Link to="/">homepage</Link></div>
    </div>
  )
}