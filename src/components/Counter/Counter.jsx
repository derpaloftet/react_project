export function Counter({ increment, decrement, count, minCounter, maxCounter }) {
  return (
    <div>
      <button type="button" onClick={ decrement } disabled={ count <= minCounter }>-</button>
      { count }
      <button type="button" onClick={ increment } disabled={ count >= maxCounter }>+</button>
    </div>
  )
}