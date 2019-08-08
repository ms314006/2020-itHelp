import React from 'react';
import ReactDom from 'react-dom';
import styles from './index.scss';

const SayHello = (props) => {
  const { names } = props;

  const isEmpty = value => value === '';

  return names.map(name => (
    <div
      key={name}
      className={
        `${styles.mainBackground}
         ${isEmpty(name) ? '' : styles.main}`
      }
      style={{
        'font-size': 28,
      }}
    >
      {`Hello ${isEmpty(name) ? 'world' : name}`}
    </div>
  ));
};

ReactDom.render(
  <SayHello names={['World', 'Air', '', 'Sun', 'Water']} />,
  document.getElementById('root'),
);
