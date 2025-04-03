import { Link } from "react-router"

import styles from "./NotFound.module.css"

export function NotFound() {
  return (
    <div className={ styles.root }>
      <h1 className={ styles.header }>Oops! Page Not Found 🧐</h1>
      <div className={ styles.message }>
        <div>It looks like the page you're looking for doesn’t exist. It might have been moved, deleted, or maybe it
          never existed in the first place!
        </div>
        <div>Go back to the <Link to="/">homepage</Link></div>
      </div>
    </div>
  )
}