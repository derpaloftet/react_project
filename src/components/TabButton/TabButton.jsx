import React from "react"

export function TabButton({ restaurant: { name }, onClickHandler }) {
  return (
    <button onClick={ onClickHandler }>
      { name }
    </button>
  )
}