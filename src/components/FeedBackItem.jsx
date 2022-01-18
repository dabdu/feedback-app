import { useContext } from "react";
import Card from "./shared/Card";
import { FaEdit, FaTimes } from "react-icons/fa";
import FeedBackContext from "../context/FeedBackContext";
function FeedBackItem({ item }) {
  const { deleteFeedBack, editFeedBack } = useContext(FeedBackContext);
  return (
    <div>
      <Card reverse={true}>
        <div className="num-display">{item.rating}</div>
        <button
          onClick={() => deleteFeedBack(item._id)}
          className="close"
          style={{ color: "orange" }}
        >
          <FaTimes />
        </button>
        <button
          onClick={() => editFeedBack(item)}
          className="edit"
          style={{ color: "orange" }}
        >
          <FaEdit />
        </button>
        <div className="text-display">{item.text}</div>
      </Card>
    </div>
  );
}

export default FeedBackItem;
