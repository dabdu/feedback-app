import { useState, useContext, useEffect } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";
import FeedBackContext from "../context/FeedBackContext";
function FeedBackForm() {
  const [text, setText] = useState("");
  const [btnDisable, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  const { handleNewFeedback, FeedBackEdit, updateFeedBack } =
    useContext(FeedBackContext);

  const handleTextOnChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text.length !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Input must be more than atleast 10 characters");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };
  useEffect(() => {
    if (FeedBackEdit.edit === true) {
      setBtnDisabled(false);
      setText(FeedBackEdit.item.text);
      setRating(FeedBackEdit.item.rating);
    }
  }, [FeedBackEdit]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedBack = {
        text,
        rating,
      };
      if (FeedBackEdit.edit === true) {
        updateFeedBack(FeedBackEdit.item._id, newFeedBack);
      } else {
        handleNewFeedback(newFeedBack);
      }

      setText("");
      setBtnDisabled(true);
      setRating(10);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={text}
            placeholder="write a review"
            onChange={handleTextOnChange}
          />
          <Button type="submit" isDisabled={btnDisable}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedBackForm;
