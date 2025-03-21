import React from "react"
import { Button } from "../Button/Button.jsx"

import styles from "./Tab.module.css"

export function Tab({ text, onClickHandler, isActive }) {
  return (
    <Button
      className={ styles.tab }
      onClick={ onClickHandler }
      disabled = { isActive }
      colorViewVariant= { isActive ? "active" : "default" }
    >
      { text }
    </Button>
  )
}