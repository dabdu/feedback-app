import { useContext } from "react";
import FeedBackContext from "../context/FeedBackContext";
const FeedBackStats = () => {
  const { FeedBack } = useContext(FeedBackContext);
  // CAlculate the average
  let average =
    FeedBack.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / FeedBack.length;
  average = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>{FeedBack.length}: Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? "0" : average}</h4>
    </div>
  );
};
export default FeedBackStats;
