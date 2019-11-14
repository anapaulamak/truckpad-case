import React from 'react';
import './input.styles.css';

export const Input = props => {
  return (
    <React.Fragment>
      <input type={props.type} value={props.value} onChange={props.onChange} onKeyPress={props.onKeyPress} name={props.name} className={props.inputClass} placeholder={props.placeholder}/>
    </React.Fragment>
  );
}