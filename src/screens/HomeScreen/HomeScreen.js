import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card";
import "./home.css";

const HomeScreen = () => {
  const posts = useSelector((state) => state.posts);



  return (
    <>
      
      <div className="home">
        <div className="container">
          {posts[0]?.length > 0 &&
            posts[0]?.map((post) => {
              return <Card key={post.id} post={post} />;
            })}
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
