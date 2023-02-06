import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const navigationHandler = () => {
    navigate("products");
  };

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go To <Link to="products">the list of products</Link>
      </p>
      <p>
        <button onClick={navigationHandler}></button>
      </p>
    </>
  );
};

export default HomePage;
