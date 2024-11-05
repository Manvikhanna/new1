import styles from "./style.module.css";

function Row({ col, align = "left", children }) {
  return (
    <div
      style={{ "--col": col, "--align": align }}
      className={styles.container}
    >
      {children}
    </div>
  );
}

export default Row;
