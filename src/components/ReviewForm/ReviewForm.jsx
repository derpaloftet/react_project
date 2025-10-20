import { Button } from "../Button/Button.jsx"
import { useActionState, useRef } from "react"

import styles from "./ReviewForm.module.css"

export function ReviewForm({ onSubmit }) {
  const ratingRef = useRef()

  const [formState, submitAction] = useActionState(
    onSubmit,
    {
      text: "Enter your review here!",
      rating: 1
    }
  )

  return (
    <form className={ styles.form }
          action={ submitAction }>
      <h3 className={ styles.header }>Leave your review</h3>
      <div className={ styles.reviewFields }>
        <div className={ styles.review }>
          <label htmlFor="text">Review: </label>
          <input
            type="text"
            id="text"
            name="text"
            defaultValue={ formState.text }
          />
        </div>
        { formState.errorMessage && <div>error</div> }
        <div className={ styles.rating }>
          <label htmlFor="rating">Rating: </label>
          <button
            className={ styles.button }
            type="button"
            id="decrement-button"
            onClick={ () => ratingRef.current.stepDown() }
          >
            -
          </button>
          <input
            className={ styles.buttonInput }
            type="number"
            id="rating"
            name="rating"
            min={ 1 }
            max={ 5 }
            ref={ ratingRef }
            defaultValue={ formState.rating }
          />
          <button
            className={ styles.button }
            type="button"
            id="increment-button"
            onClick={ () => ratingRef.current.stepUp() }
          >
            +
          </button>
        </div>
      </div>
      <div>
        <Button type="submit" title="submit">
          Submit
        </Button>
        <Button
          type="submit"
          formAction={ () => submitAction(null) }
          title="clear"
        >
          Clear
        </Button>
      </div>
    </form>
  )
}