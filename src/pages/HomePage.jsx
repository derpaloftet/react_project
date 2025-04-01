import { Link } from "react-router"

export function HomePage() {
  return (
    <div>
      <div>Welcome to the Food Delivery App</div>
      <div>
        Check out our restaurants <Link to="/restaurants">here</Link>
      </div>
    </div>
  )
}