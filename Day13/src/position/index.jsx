import React, { useState } from 'react';

const Main = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button
        type="button"
        onClick={setCount(count + 1)}
      >
        點我加一
      </button>
    </>
  );
};

export default Main;
