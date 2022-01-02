import * as React from "react";
import ReactDom from "react-dom";
import styles from './styles.css';
import { LogoApple } from 'react-ionicons';

ReactDom.render(
  <React.StrictMode>
    <div className={styles.drop}>
      <LogoApple
        color={'#445'}
        width={'6em'}
        height={'6em'}
        shake={true}
        beat={false}
        rotate={false}
      />
    </div>
  </React.StrictMode>,
  document.getElementById('app')
);
