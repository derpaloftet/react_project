"use client"

import { useGetRestaurantsQuery } from "../../../redux/services/api.js"
import { TabLink } from "../../TabLink/TabLink.jsx"

import styles from "./RestaurantsLayout.module.css"

export function RestaurantsLayout({ children }) {

  const { data, isLoading, isError } = useGetRestaurantsQuery()

  if (isLoading) {
    return "Loading..."
  }
  if (isError) {
    return "ERROR"
  }

  return (
    <>
      <div className={ styles.tabs }>
        { data.length ? data.map(({ id, name }) => (
            <TabLink key={ id } to={ `/restaurants/${ id }` } name={ name }>{ name }</TabLink>
          ))
          : null }
      </div>
      { children }
    </>
  )
}