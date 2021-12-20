import React, {useContext} from "react";
import  FeedbackContext  from "../context/FeedbackContext";


function FeedbackStats() {

  const {feedbacks} = useContext(FeedbackContext)
  //   const calculateAvarage = () => {
  //     let total = 0;
  //     let i = 0;
  //     feedbacks.forEach((element) => {
  //       total += element.rating;
  //       i++;
  //     });
  //     if (total > 0) return total / i;
  //     else return 0;
  //   };

  let avarage =
    feedbacks.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedbacks.length;

    avarage = avarage.toFixed(1)

  return (
    <div className="feedback-stats">
      <h4>{feedbacks.length} Reviews</h4>
      <h4>Avarage Rating : {isNaN(avarage) ? 0 : avarage}</h4>
    </div>
  );
}



export default FeedbackStats;
