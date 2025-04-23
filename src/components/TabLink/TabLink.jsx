import React, { use } from "react"
import classNames from "classnames"
import { ThemeContext } from "../Theme-context/index.js"

import styles from "./TabLink.module.css"
import Link from "next/link.js"

export function TabLink({ children, to }) {

  const { theme } = use(ThemeContext)

  return (
    <Link
      href={ to }
      className={ ({ isActive }) =>
        classNames(styles.root, {
          [styles.isActive]: isActive,
          [styles.light]: theme === "light",
          [styles.dark]: theme === "dark"
        })
      }
    >
      { children }
    </Link>
  )
}