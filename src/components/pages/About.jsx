import { Link } from "react-router-dom";
import Card from "../shared/Card";

function About() {
  return (
    <Card>
      <h1>About Page</h1>
      <p>
        This is a Feedback App built on React JS Framework, Its allows customers
        to give the feedback on a partocular product or service
      </p>
      <Link to="/">Back to HomePage</Link>
    </Card>
  );
}
export default About;
