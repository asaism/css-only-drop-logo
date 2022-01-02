import * as React from "react";
import ReactDom from "react-dom";
import styles from './styles.css';

ReactDom.render(
  <React.StrictMode>
    <div className={styles.drop}></div>
  </React.StrictMode>,
  document.getElementById('app')
);
