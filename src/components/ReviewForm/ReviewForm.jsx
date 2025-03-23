import { Counter } from "../Counter/Counter.jsx"
import { useForm } from "./useForm.js"
import { Button } from "../Button/Button.jsx"

export function ReviewForm({ restaurantName }) {
  const { name, review, rating, setName, setReview, increment, decrement, clearForm } = useForm(restaurantName)
  return (
    <form onSubmit={ e => {
      e.preventDefault()
      console.log("submitted")
    } }>
      <h3>Leave your review for { restaurantName }</h3>
      <input type="text" value={ name } onChange={ (e) => setName(e.target.value) }
             placeholder="Enter your name" /><br />
      <textarea value={ review } onChange={ (e) => setReview(e.target.value) }
                placeholder="Enter your review here"></textarea>
      <div>Your rating: <Counter
        increment={ increment }
        decrement={ decrement }
        count={ rating }
        minCounter={ 1 }
        maxCounter={ 5 }
      />
      </div>
      <Button>Submit</Button>
      <Button type="reset" onClick={ clearForm }>Clear</Button>
    </form>
  )
}