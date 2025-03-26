import { Counter } from "../Counter/Counter.jsx"
import { useCount } from "../Counter/useCount.js"

export function DishCounter() {
  const { increment, decrement, count } = useCount()
  return (
    <div>
      <Counter increment={ increment }
               decrement={ decrement }
               count={ count }
               minCounter={ 0 }
               maxCounter={ 5 }
      />
    </div>
  )
}