import React, {useContext} from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const {feedbacks, handleDelete} = useContext(FeedbackContext)


  if (!feedbacks || feedbacks.length === 0) {
    return <p>No feedbacks yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedbacks.map((feedback) => {
        return (
          <FeedbackItem
            key={feedback.id}
            item={feedback}
            deleteItem={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default FeedbackList;
