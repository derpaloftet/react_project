import { Button } from "../Button/Button.jsx"

import styles from "./Counter.module.css"

export function Counter({ increment, decrement, count, minCounter, maxCounter }) {
  return (
    <div>
      <Button type="button" className={ styles.button } onClick={ decrement }
              disabled={ count <= minCounter }>-</Button>
      { count }
      <Button type="button" className={ styles.button } onClick={ increment }
              disabled={ count >= maxCounter }>+</Button>
    </div>
  )
}