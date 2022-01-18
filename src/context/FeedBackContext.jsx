import { createContext, useEffect, useState } from "react";
import axios from "axios";
const url = "https://enigmatic-hamlet-05849.herokuapp.com/api";
const FeedBackContext = createContext();
export const FeedBackProvider = ({ children }) => {
  const [FeedBack, setFeedBack] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    try {
      const { data } = await axios.get(url);
      setIsLoading(false);
      setFeedBack(data)
    } catch (error) {
      console.error(error);
    }
  };
  const handleNewFeedback = async (newFeedBack) => {
    try {
      const { data } = await axios.post(url, newFeedBack);
      setFeedBack([data, ...FeedBack]);
    } catch (ex) {
      console.log(ex);
    }
  };
  const [FeedBackEdit, setFeedBackEdit] = useState({
    item: {},
    edit: false,
  });
  const editFeedBack = (item) => {
    setFeedBackEdit({
      item,
      edit: true,
    });
  };
  const updateFeedBack = async (_id, uptItem) => {
    try {
      const { data } = await axios.put(`${url}/${_id}`, uptItem);
      console.log(data);
      setFeedBack(
        FeedBack.map((item) => (item._id === _id ? { ...item, ...data } : item))
      );
    } catch (ex) {}
  };
  const deleteFeedBack = async (_id) => {
    if (window.confirm("Are you Sure You want to delete?")) {
      try {
        const { data } = await axios.delete(`${url}/${_id}`);
        console.log(data);
        setFeedBack(
          FeedBack.filter((data) => {
            return data._id !== _id;
          })
        );
      } catch (ex) {
        console.log(ex);
      }
    }
  };

  return (
    <FeedBackContext.Provider
      value={{
        FeedBack,
        FeedBackEdit,
        isLoading,
        deleteFeedBack,
        handleNewFeedback,
        editFeedBack,
        updateFeedBack,
      }}
    >
      {children}
    </FeedBackContext.Provider>
  );
};
export default FeedBackContext;
