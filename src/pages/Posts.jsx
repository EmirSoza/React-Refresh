import {
  Navigate,
  // useNavigate,
  useParams,
} from "react-router-dom";

function Posts() {
  const params = useParams();
  const status = 200;
  if (status === 404) {
    return <Navigate to={"/notFoundPage"} />;
  }

  //const navigate = useNavigate();

  //   const onClick = () => {
  //     navigate("/about");
  //   };
  return (
    <div>
      <h1>From url got {params.id}</h1>
      {/* <button onClick={onClick}>ABOUT</button> */}
    </div>
  );
}

export default Posts;
