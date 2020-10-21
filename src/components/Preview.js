import React, { forwardRef } from "react";
import classes from "./Preview.module.css"

const Preview = forwardRef((props,ref)=>(<div ref={ref} className={classes.preview}></div>));

export default Preview;