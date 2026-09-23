import React from "react";
import { Link } from "react-router";
const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/form">UserFormページ</Link>
    </div>
  );
};

export default Home;
