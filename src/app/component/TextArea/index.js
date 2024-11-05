import React from "react";
import styles from "./style.module.css";
function TextArea({
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
      <textarea
        rows={5}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
    </div>
  );
}

export default TextArea;
