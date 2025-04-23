"use client";

import styles from "./HomePage.module.css"
import Link from "next/link.js"

export function HomePage() {
  return (
    <div className={ styles.root }>
      <h1 className={ styles.header }>Welcome to the Food Delivery App</h1>
      <div className={ styles.message }>
        Check out our restaurants <Link href="/restaurants">here</Link>
      </div>
    </div>
  )
}