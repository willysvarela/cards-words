import React from 'react'
import style from './style.module.scss'
import Link from 'next/link';
const BUTTON_COLOR = {
  'green': 'button-green',
  'orange': 'button-orange',
}
const Button = ({onClick, children, color, as, href}) => {
  const buttonColor = BUTTON_COLOR[color] ?? 'button-default';
  return (
    as === 'link' ?
    <Link href={href} className={`${style.button} ${style[buttonColor]}`} onClick={onClick}>
      {children}
    </Link>
    :
    <button className={`${style.button} ${style[buttonColor]}`} onClick={onClick}>{children}</button>
  )
}

export default Button