import React from 'react';
import './input.styles.scss';

export const Input = props => {
  return (
    <React.Fragment>
      <div className="input-area">
        <label>{props.inputTitle}</label>
        <br />
        <input type={props.type}
                value={props.value}
                onChange={props.onChange}
                name={props.name}
                className={props.inputClass}
                placeholder={props.placeholder}/>
      </div>

    </React.Fragment>
  );
}