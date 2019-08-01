import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import styles from './index.scss';

const Counter = () => {
  useEffect(() => {
    console.log('Component Render 後執行');
    return () => {
      console.log('Component 移除執行');
    }
  }, []);
  
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`State 改變前 ${count}`)
    return () => {
      console.log(`State 改變後 ${count}`);
    };
  }, [count]);

  return (
    <>
      <h1 className={styles.main}>{count}</h1>
      <button type="button" onClick={() => { setCount(count + 1); }}>
        點我加 1
      </button>
    </>
  );
};

const Main = () => {
  const [hiddenCounter, setHiddenCounter] = useState(false);
  return (
    <>
      <button type="button" onClick={() => { setHiddenCounter(!hiddenCounter); }}>
        開啟、關閉計數器
      </button>
      {
        hiddenCounter ? null : <Counter />
      }
    </>
  );
};

ReactDom.render(<Main />, document.getElementById('root'));
