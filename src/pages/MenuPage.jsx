import { useParams } from "react-router"
import { Menu } from "../components/Menu/Menu.jsx"

export default function MenuPage() {
  const { restaurantId } = useParams()
  return (
    <div>
      <Menu restaurantId={ restaurantId } />
    </div>)
}