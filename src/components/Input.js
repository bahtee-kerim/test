import React from 'react';
import s from './Input.module.css';

const Input = (props) => {
  return (
    <div className={s.inputWrap}>
      <input className={s.input}
      onChange={props.getInput}
      value={props.state.input}
      type='text' 
      placeholder='search project'/>
    </div>
  )
}

export default Input;
