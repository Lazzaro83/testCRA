import React from "react";

const Card = ({ post }) => {
  return (
    <div className="card">
      <h1>{post.title}</h1>
      <img src={post.avatar} alt="" />
      <p>{post.post.slice(0, 20)}...</p>
      <p>{post.author}</p>
    </div>
  );
};

export default Card;
