import React, { Component } from 'react';
import styles from './index.module.css';

const Selector = ({ value, selections, id, label, onChange }) => {
  let options = selections.map(item => {
    return <option value={item}>{item}</option>;
  });
  return (
    <label for={id}>
      {label}
      <select id={id} value={value} onChange={onChange}>
        {options}
      </select>
    </label>
  );
};

export default Selector;
