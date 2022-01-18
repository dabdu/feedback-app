import { FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
function AboutIconLink() {
  return (
    <div className="about-link">
      <Link to="/about">
        <FaQuestionCircle size={35} />
      </Link>
    </div>
  );
}
export default AboutIconLink;
