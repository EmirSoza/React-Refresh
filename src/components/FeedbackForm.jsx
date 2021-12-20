import React, { useState, useContext, useEffect } from "react";
import Button from "../shared/Button";
import Card from "../shared/Card";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  const [text, settext] = useState("");
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setbtnDisabled(false);
      settext(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    } 
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    if (text === "") {
      setbtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length < 10) {
      setbtnDisabled(true);
      setMessage("text must be at least 10 characters");
    } else {
      setbtnDisabled(false);
      setMessage(null);
    }
    settext(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 9) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      settext("");
      setbtnDisabled(true);
      setMessage(null);
      setRating(10);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(val) => setRating(val)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            SEND
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
