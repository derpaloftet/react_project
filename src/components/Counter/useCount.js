import { useState } from "react"

export function useCount() {
  const [count, setCount] = useState(0)
    const increment = () => setCount((count < 5) ? count + 1 : count)
    const decrement = () => setCount((count > 0) ? count - 1 : count)
    return { count, decrement, increment }
 }