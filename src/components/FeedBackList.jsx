import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FeedBackItem from "./FeedBackItem";
import FeedBackContext from "../context/FeedBackContext";
import Spinner from "./shared/Spinner";

function FeedBackList() {
  const { FeedBack, isLoading } = useContext(FeedBackContext);

  if (!isLoading && (!FeedBack || FeedBack.length === 0))
    return <p>No Feed Back YEt</p>;
  return isLoading ? (
    <Spinner />
  ) : (
    
    <AnimatePresence>
      {FeedBack.map((item)=> (
        <motion.div
          key={item._id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <FeedBackItem key={item._id} item={item} id={item._id} />
        </motion.div>
      ))}
    </AnimatePresence>
  );
  // return (
  // Without AMination
  // <div>
  //   {FeedBack.map((item) => (
  //     <FeedBackItem
  //       handleDelete={() => handleDelete(item.id)}
  //       key={item.id}
  //       item={item}
  //     />
  //   ))}
  // </div>
  // );
}
export default FeedBackList;
