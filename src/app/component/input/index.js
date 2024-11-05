import React from "react";
import styles from "./style.module.css";
function Input({
  type = "text",
  title = "Title",
  placeholder = "Placeholder",
  onChange = (e) => {
    e.preventDefault();
  },
  name,
}) {
  return (
    <div className={styles.container}>
      <span>{title}</span>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
    </div>
  );
}

export default Input;
