import { Counter } from "../Counter/Counter.jsx"

export function Dish({ menu }) {
  const { name, price, ingredients } = menu
  return (
    <>
      <h3>{ name }</h3>
      <div>Price: { price }</div>
      <div>Ingredients:</div>
      <ul>
        { ingredients.map((ingredient) => <li key={ ingredient }>{ ingredient }</li>) }
      </ul>
      <Counter />
    </>
  )
}