import React from "react";
import { useNavigate } from "react-router";

const UserForm = () => {
  const navigate = useNavigate();

  const handleComplete = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/complete", { replace: true });
  };
  return (
    <div>
      <h2 className="py-10">UserForm</h2>
      <form onSubmit={handleComplete}>
        <label htmlFor="name">
          <input type="text" id="name" />
        </label>
        <label htmlFor="email">
          <input type="email" id="email" />
        </label>
        <button type="submit">送信</button>
      </form>
    </div>
  );
};

export default UserForm;
