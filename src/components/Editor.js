import React, { forwardRef } from "react";
import classes from "./Editor.module.css"

const Editor = forwardRef((props,ref)=>
(<textarea onChange={props.onChange} value={props.value} className={classes.editor}>
</textarea>));

export default Editor;