import React from 'react'
import styles from "./style.module.css"
function Form({children, title}) {
  return (
    <div className={styles.container}>
        {title && <span className={styles.title}>{title}</span>}
        {children}
    </div>
  )
}

export default Form