import React, { useState } from "react";
import classes from "./TweetBox.module.css";
import { Button, Avatar } from "@material-ui/core";
import db from '../../firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImg, setTweetImg] = useState("");

  const handleTweetChange = (event) => {
    setTweetMessage(event.target.value);
  };

  const handleTweetImgChange = (event) => {
    setTweetImg(event.target.value);
  };

  const sendTweet = (event) => {
    event.preventDefault();
    db.collection('posts').add({
      displayName: "Programmer",
      username: "programmer",
      verified: true,
      text: tweetMessage,
      image: tweetImg,
      avatar: "https://handluggageonly.co.uk/wp-content/uploads/2015/12/IMG_4285.jpg"
    });
    setTweetMessage("");
    setTweetImg("");
  };

  return (
    <div className={classes.tweetBox}>
      <form>
        <div className={classes.tweetBox__input}>
          <Avatar src="https://handluggageonly.co.uk/wp-content/uploads/2015/12/IMG_4285.jpg" />
          <input
            value={tweetMessage}
            onChange={handleTweetChange}
            type="text"
            placeholder="What's happening?"
          />
        </div>
        <input
          className={classes.tweetBox__inputImg}
          type="text"
          value={tweetImg}
          placeholder="Enter image URL"
          onChange={handleTweetImgChange}
        />
        <Button type="submit" onClick={sendTweet} className={classes.tweetBox__tweetButton}>Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
