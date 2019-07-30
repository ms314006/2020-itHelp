import React, { useState } from 'react';
import ReactDom from 'react-dom';
import styles from './index.scss';

const Main = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className={styles.main}>{count}</h1>
      <button type="button" onClick={() => { setCount(count + 1); }}>
        點我加 1
      </button>
    </>
  );
};

ReactDom.render(<Main />, document.getElementById('root'));
