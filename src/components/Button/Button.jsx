import styles from "./Button.module.css"
import classNames from "classnames"
import { ThemeContext } from "../Theme-context"
import { use } from "react"

export function Button({ children, onClick, disabled, className, colorViewVariant = "default", type }) {
  const { theme } = use(ThemeContext)
  return (
    <button
      type={ type }
      onClick={ onClick }
      disabled={ disabled }
      className={ classNames(styles.button, className, {
        [styles.default]: colorViewVariant === "default",
        [styles.active]: colorViewVariant === "active",
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark"
      }) }
    >
      { children }
    </button>
  )
}