import React from "react"
import { Button } from "../Button/Button.jsx"

export function Tab({ text, onClickHandler, isActive }) {
  return (
    <Button onClick={ onClickHandler } disabled = { isActive }>
      { text }
    </Button>
  )
}