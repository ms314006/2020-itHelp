import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import styles from './index.scss';

const SayHello = (props) => {
  const { names } = props;

  const isEmpty = value => value === '';
  return (
    <div
      className={styles.mainBackground}
      style={{ fontSize: 28 }}
    >
      {names.map(name => (
        <div
          key={name}
          className={isEmpty(name) ? '' : styles.main}
        >
          {`Hello ${isEmpty(name) ? 'World' : name}`}
        </div>
      ))}
    </div>
  );
};

SayHello.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string),
};

SayHello.defaultProps = {
  names: ['Default string'],
};

ReactDom.render(
  <SayHello names={[1, 2, 3]} />,
  document.getElementById('root'),
);
