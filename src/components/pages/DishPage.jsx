"use client"

import { Dish } from "../Dish/Dish.jsx"
import { useGetDishByIdQuery } from "../../redux/services/api.js"

export function DishPage({ dishId }) {

  const { data, isLoading, isError } = useGetDishByIdQuery(dishId)

  if (isLoading) {
    return "Loading..."
  }
  if (isError) {
    return "ERROR"
  }

  return (<Dish dishId={ dishId } dish={ data } />)
}