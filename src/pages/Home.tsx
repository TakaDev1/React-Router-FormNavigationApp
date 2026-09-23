import React from "react";
import { Link } from "react-router";
const Home = () => {
  return (
    <div>
      <h2 className="py-10">Home</h2>
      <Link
        to="/form"
        className="bg-gray-500 text-white cursor-pointer py-3 hover:opacity-80 transition w-1/4 inline-block rounded-lg"
      >
        UserFormページ
      </Link>
    </div>
  );
};

export default Home;
