import classes from "./Feed.module.css";
import React, { useState, useEffect } from "react";
import FlipMove from "react-flip-move";
import TweetBox from "../TweetBox/TweetBox";
import Post from "../../components/Post/Post";
import db from "../../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id
        };}))
    );
  }, []);
  const renderPosts = posts.map((post) => (
    <Post
      key={post.id}
      displayName={post.displayName}
      username={post.username}
      verified={post.verified}
      text={post.text}
      image={post.image}
      avatar={post.avatar}
    />
  ));

  return (
    <div className={classes.feed}>
      <div className={classes.feed__header}>
        <h2>Home</h2>
      </div>

      <TweetBox />
      <FlipMove>{renderPosts}</FlipMove>
    </div>
  );
}

export default Feed;
