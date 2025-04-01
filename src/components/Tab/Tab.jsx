import React from "react"
import { Button } from "../Button/Button.jsx"

import styles from "./Tab.module.css"

export function Tab({ children, onClickHandler, isActive }) {
  return (
    <button
      className={ styles.tab }
      onClick={ onClickHandler }
      disabled={ isActive }
      //colorViewVariant={ isActive ? "active" : "default" }
    >
      { children }
    </button>
  )
}