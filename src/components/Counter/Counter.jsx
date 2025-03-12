import { useCount } from "./useCount.js"

export function Counter() {
  const { increment, decrement, count } = useCount(0)
  return (
    <div>
      <button onClick={ increment }>+</button>
      { count }
      <button onClick={ decrement }>-</button>
    </div>
  )
}