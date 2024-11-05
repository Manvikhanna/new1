import React from "react";
import styles from "./style.module.css";
function Button({ title = "Submit", onClick = () => {}, type = "primary" }) {
  return (
    <div className={`${styles.container} ${styles[type]}`} onClick={onClick}>
      {title}
    </div>
  );
}

export default Button;
