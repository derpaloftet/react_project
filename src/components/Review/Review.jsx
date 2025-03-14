export function Review({ review: { user, rating, text } }) {
  return (
    <li>
      <div>Name: { user }</div>
      <div>Rating: { rating }</div>
      <div>{ text }</div>
    </li>
  )
}