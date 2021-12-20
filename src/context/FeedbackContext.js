import { useState, createContext } from "react";
import FeedbackData from "../data/FeedbackData";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);
  const [feedbackEdit, setfeedbackEdit] = useState({ item: {}, edit: false });

  // Set item to be updated
  const editFeedback = (item) => {
    setfeedbackEdit({ item, edit: true });
  };
  // Update feedback item
  const updateFeedback = (id, item) => {
    setFeedbacks(
      feedbacks.map((el) => (el.id === id ? { ...el, ...item } : el))
    );
    setfeedbackEdit({ item: {}, edit: false });
  };

  // delete given id ed item
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedbacks(feedbacks.filter((item) => item.id !== id));
    }
  };

  // add new item
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedbacks([newFeedback, ...feedbacks]);
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        feedbackEdit,
        handleDelete,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
