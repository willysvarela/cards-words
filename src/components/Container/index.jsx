import React from 'react'
import style from './style.module.scss';
const Container = ({children}) => {
  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
        {children}
      </div>
    </div>
  )
}

export default Container;