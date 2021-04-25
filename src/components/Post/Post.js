import React, { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import classes from "./Post.module.css";

const Post = forwardRef(({
  displayName,
  username,
  verified,
  text,
  image,
  avatar,
}, ref) => {
  return (
    <div className={classes.post} ref={ref}>
      <div className={classes.post__avatar}>
        <Avatar src={avatar} />
      </div>
      <div className={classes.post__body}>
        <div className={classes.post__header}>
          <div className={classes.post__headerText}>
            <h3>
              {displayName} said{" "}
              <span className={classes.post__headerSpecial}>
              {verified && <VerifiedUserIcon className={classes.post__badge}/>} @{username}
              </span>
            </h3>
          </div>
          <div className={classes.post__headerDescription}>
              <p>{text}</p>
          </div>
        </div>
        <img src={image} alt=""/>
        <div className={classes.post__footer}>
            <ChatBubbleIcon fontSize='small' />
            <RepeatIcon fontSize='small' />
            <FavoriteBorderIcon fontSize='small' />
            <PublishIcon fontSize='small' />
        </div>
      </div>
    </div>
  );
});

export default Post;
