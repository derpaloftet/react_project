import { useState } from "react"

const MIN_COUNTER = 0
const MAX_COUNTER = 5

export function useCount() {
  const [count, setCount] = useState(MIN_COUNTER)
  const increment = () => setCount((count < MAX_COUNTER) ? count + 1 : count)
  const decrement = () => setCount((count > MIN_COUNTER) ? count - 1 : count)
  return { count, decrement, increment }
}