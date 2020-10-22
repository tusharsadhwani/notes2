import React from "react";
import classes from "./FancyButton.module.css";

interface FancyButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  title: string;
}

const FancyButton: React.FC<FancyButtonProps> = (props) => {
  return (
    <button onClick={props.onClick} className={classes.fancy}>
      {props.title}
    </button>
  );
};

export default FancyButton;
