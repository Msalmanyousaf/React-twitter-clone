import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import classes from "./Widgets.module.css";

function Widgets() {
  return (
    <div className={classes.widgets}>
      <div className={classes.widgets__input}>
        <SearchIcon className={classes.widgets__searchIcon} />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className={classes.widgets__widgetsContainer}>
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1115964692802019328"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="nasa"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.facebook.com/NASA/"}
          options={{ text: "#NASA", via: "salman" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
