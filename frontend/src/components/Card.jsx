import React from "react";
import { NavLink } from "react-router-dom";
function Card({ post }) {
  return (
    <div className="card">
      <span className="title">{post.title}</span>
      <img src={post.img} alt="" className="img" />
      <p className="desc">{post.desc}</p>
      <NavLink className="cardButton" to={`/post/${post.id}`}>
        Read More
      </NavLink>
    </div>
  );
}

export default Card;
