import { Counter } from "../Counter/Counter.jsx"

export function Dish({ menu: { name, price, ingredients }  }) {
  return (
    <>
      <h3>{ name }</h3>
      <div>Price: { price }</div>
      <div>Ingredients:</div>
      <ul>
        { ingredients.length ? ingredients.map((ingredient) => <li key={ ingredient }>{ ingredient }</li>) : null }
      </ul>
      <Counter />
    </>
  )
}