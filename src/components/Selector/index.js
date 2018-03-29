import React from 'react';
import styles from './index.module.css';

const Selector = ({ value, selections, id, label, onChange }) => {
  const options = selections.map(item => {
    return <option value={item}>{item}</option>;
  });
  return (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={value}
        style={{ paddingLeft: '5px' }}
        onChange={onChange}
      >
        {options}
      </select>
    </label>
  );
};

export default Selector;
