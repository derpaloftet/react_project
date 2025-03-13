import React from "react"

export function TabButton({ text, onClickHandler }) {
  return (
    <button onClick={ onClickHandler }>
      { text }
    </button>
  )
}