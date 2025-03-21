import styles from "./Button.module.css"
import classNames from "classnames"

export function Button({ children, onClick, disabled, className, colorViewVariant = "default" }) {
  return (
    <button
      onClick={ onClick }
      disabled={ disabled }
      className={ classNames(styles.button, className, {
        [styles.default]: colorViewVariant === "default",
        [styles.active]: colorViewVariant === "active"
      }) }
    >
      { children }
    </button>
  )
}