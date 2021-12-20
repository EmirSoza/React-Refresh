import { useState, createContext, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setisLoading] = useState(true);
  const [feedbacks, setFeedbacks] = useState([]);
  const [feedbackEdit, setfeedbackEdit] = useState({ item: {}, edit: false });

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    const response = await fetch("/feedbacks?_sort=id&_order=desc");
    const data = await response.json();
    setFeedbacks(data);
    setisLoading(false);
  };

  // Set item to be updated
  const editFeedback = (item) => {
    setfeedbackEdit({ item, edit: true });
  };
  // Update feedback item
  const updateFeedback = async (id, item) => {
    const response = await fetch(`/feedbacks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    const data = await response.json();
    setFeedbacks(
      feedbacks.map((el) => (el.id === id ? { ...el, ...data } : el))
    );
    setfeedbackEdit({ item: {}, edit: false });
  };

  // delete given id ed item
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`/feedbacks/${id}`, {
        method: "DELETE",
      });
      setFeedbacks(feedbacks.filter((item) => item.id !== id));
    }
  };

  // add new item
  const addFeedback = async (newFeedback) => {
    const response = await fetch("/feedbacks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedbacks([data, ...feedbacks]);
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        feedbackEdit,
        isLoading,
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
