import styles from "./Rating.module.css";
import React, { useState } from "react";

export default function Rating() {
  const [selectedRating, setSelectedRating] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleRatingClicked(rating) {
    setSelectedRating(rating);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return isSubmitted ? (
    <div className={styles.thankYouPanel}>
      <img src="/illustration-thank-you.svg" />

      <p className={styles.selected}>You selected {selectedRating} out of 5</p>

      <h1 className={styles.title}>Thank you!</h1>

      <p className={styles.description}>
        We appreciated you taking the time to give a rating. If you ever need
        more support, dont hesitate to get in touch.
      </p>
    </div>
  ) : (
    <form onSubmit={handleFormSubmit} className={styles.panel}>
      <img className={styles.star} src="/icon-star.svg" alt="" />

      <h1 className={styles.title}>How did you do?</h1>

      <p className={styles.description}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className={styles.group}>
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            type="button"
            onClick={() => handleRatingClicked(rating)}
            className={styles.rating}
          >
            {rating}
          </button>
        ))}
      </div>
      <button disabled={selectedRating === undefined} className={styles.submit}>
        SUBMIT
      </button>
    </form>
  );
}
