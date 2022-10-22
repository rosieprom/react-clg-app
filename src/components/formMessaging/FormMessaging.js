import React from 'react';
import classes from "./FormMessaging.module.css";

function FormMessaging(props) {
  const { isError, content } = props
  return (
    <div className={isError === true ? classes.error : classes.success}>
      {content}
    </div>
  );
}

export default FormMessaging;
