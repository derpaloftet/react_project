"use server"

import { revalidateTag } from "next/cache"
import { apiDomain } from "../config.js"

export async function addReviewAction({ restaurantId, review }) {
  const result = await fetch(`${apiDomain}/api/review/${ restaurantId }`, {
    method: "POST",
    body: JSON.stringify(review),
    headers: { "Content-Type": "application/json" }
  })

  revalidateTag("getReviewsByRestaurantId")

  return result.json()
}