import React from "react";
import { Link } from "react-router-dom";
import "./Nat.css";

const Nat = ({ author, text }) => {
  return (
    <div className="nat">
      <p className="author">
        <Link to={`/profile/${author}`}>@{author}</Link>
      </p>
      <p className="text">{text}</p>
    </div>
  );
};

export default Nat;
