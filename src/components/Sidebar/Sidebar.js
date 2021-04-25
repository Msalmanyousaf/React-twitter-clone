import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption/SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import SearchIcon from "@material-ui/icons/Search";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import { Button } from "@material-ui/core";
import classes from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <TwitterIcon className={classes.sidebar__twitterIcon}/>
      <SidebarOption text="Home" Icon={HomeIcon} active />
      <SidebarOption text="Explore" Icon={SearchIcon} />
      <SidebarOption
        text="Notifications"
        Icon={NotificationsNoneOutlinedIcon}
      />
      <SidebarOption text="Messages" Icon={MailOutlineIcon} />
      <SidebarOption text="Bookmarks" Icon={BookmarkBorderOutlinedIcon} />
      <SidebarOption text="Lists" Icon={ListAltOutlinedIcon} />
      <SidebarOption text="Profile" Icon={PersonOutlineOutlinedIcon} />
      <SidebarOption text="More" Icon={MoreHorizOutlinedIcon} />

      <Button variant="outlined" className={classes.sideBarButton} fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
