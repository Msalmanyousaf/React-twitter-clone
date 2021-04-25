import React from "react";
import classes from "./SidebarOption.module.css";

function SidebarOptions({ active, text, Icon }) {
  const sidebarClasses = [
    classes.sidebarOption,
    active ? classes.sidebarOptionActive : "",
  ];
  return (
    <div className={sidebarClasses.join(" ")}>
      <Icon className={classes.icon} />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOptions;
