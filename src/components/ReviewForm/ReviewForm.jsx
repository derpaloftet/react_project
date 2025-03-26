import { Counter } from "../Counter/Counter.jsx"
import { useForm } from "./useForm.js"
import { Button } from "../Button/Button.jsx"

import styles from "./ReviewForm.module.css"

export function ReviewForm({ restaurantName }) {
  const { name, review, rating, setName, setReview, increment, decrement, clearForm } = useForm(restaurantName)
  return (
    <form className={ styles.form }
          onSubmit={ e => {
            e.preventDefault()
            console.log("submitted")
          } }>
      <h3 className={ styles.header }>Leave your review for { restaurantName }</h3>
      <div className={ styles.reviewFields }>
        <div className={ styles.name }>Name: <input type="text" value={ name }
                                                    onChange={ (e) => setName(e.target.value) }
                                                    placeholder="John Doe" /><br /></div>
        <div className={ styles.review }>Review: <textarea value={ review }
                                                           onChange={ (e) => setReview(e.target.value) }
                                                           placeholder="Enter your review here"></textarea></div>
        <div>Rating: <Counter
          increment={ increment }
          decrement={ decrement }
          count={ rating }
          minCounter={ 1 }
          maxCounter={ 5 }
        />
        </div>
      </div>
      <div>
        <Button>Submit</Button>
        <Button type="reset" onClick={ clearForm }>Clear</Button>
      </div>
    </form>
  )
}