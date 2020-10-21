import React from "react";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <p className={classes.headerTitle}>Quill</p>;
    </div>
  );
};

export default Header;
