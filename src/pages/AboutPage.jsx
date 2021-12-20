import Card from "../components/shared/Card";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function AboutPage() {
  return (
    <Card>
      <h2>This is about page</h2>
      <Link to={"/"}>
        <FaHome size={30} />
      </Link>
    </Card>
  );
}

export default AboutPage;
