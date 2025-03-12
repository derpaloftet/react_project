export function Reviews({ reviews }) {
  return (
    <>
      <h3>Reviews</h3>
      <ul>
        { reviews.length ? reviews.map(({ id, user, rating, text }) => (
           <li key={ id }>
            <div>Name: { user }</div>
            <div>Rating: { rating }</div>
            <div>{ text }</div>
          </li>
        )) : null }
      </ul>
    </>
  )
}