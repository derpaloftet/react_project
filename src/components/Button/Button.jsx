import classNames from "classnames"
import { ThemeContext } from "../Theme-context"
import { use } from "react"
import { useFormStatus } from "react-dom"

import styles from "./Button.module.css"

export function Button({
                         children,
                         onClick,
                         className,
                         colorViewVariant = "default",
                         type = "button",
                         buttonForm,
                         formAction
                       }) {
  const { theme } = use(ThemeContext)
  const { pending } = useFormStatus()
  return (
    <button
      type={ type }
      onClick={ onClick }
      disabled={ pending }
      formAction={ formAction }
      className={ classNames(styles.button, className, {
        [styles.default]: colorViewVariant === "default",
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
        [styles.buttonRound]: buttonForm === "round"
      }) }
    >
      { children }
    </button>
  )
}