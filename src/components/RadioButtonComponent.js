import React from 'react';

const RadioButtonComponent = props => {
  const { classes, name, value, text } = props;
  return(
    <label className={classes}>
      {text}
      <input type="radio" name={name} value={value} />
      <span className="checkmark"></span>
    </label>
  )
}

export default RadioButtonComponent;