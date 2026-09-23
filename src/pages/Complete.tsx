import React from "react";
import { Link } from "react-router";

const Complete = () => {
  return (
    <div>
      <h2>Complete</h2>
      <p>送信が完了しました</p>
      <Link to="/">Homeへ戻る</Link>
    </div>
  );
};

export default Complete;
