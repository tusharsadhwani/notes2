import React from "react";

import classes from "./Header.module.css";
import NoteList from "./NoteList";

const Header = () => {
  return (
    <div className={classes.header}>
      <p className={classes.headerTitle}>Q U I L L</p>
      <NoteList />
    </div>
  );
};

export default Header;
