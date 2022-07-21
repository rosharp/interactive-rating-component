import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';
import '../css/main.css'

function Rating() {
  const [activeId, setActiveId] = useState();
  const [ratingNum, setRatingNum] = useState(null);
  const [showThanks, setShowThanks] = useState(false);
  const [isChosen, setIsChosen] = useState(false);

  const showThanksDiv = () => setShowThanks(true);

  const values = [
    { id: 1, text: "1" },
    { id: 2, text: "2" },
    { id: 3, text: "3" },
    { id: 4, text: "4" },
    { id: 5, text: "5" }
  ];

  return (
    showThanks ? (
      <CSSTransition in={showThanks} timeout={300} className="thank-you" unmountOnExit>
        <section className="thank-you">
          <img className="thank-you-img" src="images/illustration-thank-you.svg"></img>

          <i>You selected {ratingNum} out of 5</i>

          <h1>Thank you!</h1>

          <p>
            We appreciate you taking the time to give a rating. If you ever need more support,
            don’t hesitate to get in touch!
          </p>
        </section>
      </CSSTransition>

    ) : (
      <section className="rating">
        <img className="star-img" src="/images/icon-star.svg" />

        <h1>How did we do?</h1>

        <p>
          Please let us know how we did with your support request. All feedback is appreciated
          to help us improve our offering!
        </p>

        <ul>
          {values.map((val) => (
            <li
              style={activeId === val.id ? { backgroundColor: 'hsl(217, 12%, 63%)', color: 'hsl(0, 0%, 100%)' } : { backgroundColor: 'hsl(210, 15%, 24%)', transition: '.4s' }}
              onClick={() => setActiveId(val.id) || setRatingNum(val.text) || setIsChosen(true)}
              className={activeId === val.id ? "rating-num-active" : "rating-num"}
            >
              {val.text}
            </li>
          ))}
        </ul>

        <button onClick={isChosen ? showThanksDiv : null}>Submit</button>
      </section>
    )
  );
}

export default Rating;
