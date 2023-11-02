import React from 'react'
import style from './style.module.scss';
const Input = ({id, label, type, placeholder, value, onChange, ...rest}) => {
  return (
    <div className={style.input}>
        <label for={id}>{label}</label>
        <input id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} {...rest} />
    </div>
  )
}

export default Input