import React from 'react';

const InputField = ({ id, onChange, value, label }) => (
  <div className="input-field">
    <label htmlFor={id}>{label}</label>
    <input type="text" id={id} onChange={onChange} value={value} />
  </div>
);

export default InputField;
