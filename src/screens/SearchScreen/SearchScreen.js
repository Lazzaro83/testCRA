import React from "react";
import Card from "../../components/Card";

const SearchScreen = ({ posts }) => {
  return (
    <div className="container">
      {posts.length > 0 &&
        posts.map((post) => {
          return <Card key={post.id} post={post} />;
        })}
    </div>
  );
};

export default SearchScreen;
