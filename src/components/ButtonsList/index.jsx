import React from 'react'
import style from './style.module.scss'

const ButtonsList = ({children}) => {
  return (
    <div className={style.buttons}>{children}</div>
  )
}

ButtonsList.propTypes = {}

export default ButtonsList