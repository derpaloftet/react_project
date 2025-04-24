import React, { use } from "react"
import classNames from "classnames"
import { ThemeContext } from "../Theme-context/index.js"
import Link from "next/link.js"
import { usePathname } from "next/navigation.js"

import styles from "./TabLink.module.css"

export function TabLink({ children, to }) {

  const pathname = usePathname()
  const { theme } = use(ThemeContext)
  const isActive = pathname === to

  return (
    <Link
      href={ to }
      className={
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