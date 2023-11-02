import React from 'react'
import { MdCheck, MdRefresh, MdClose } from "react-icons/md"
import style from './style.module.scss'
const ICONS = {
    check: MdCheck,
    refresh: MdRefresh,
    close: MdClose,
}

const COLOR_CLASS = {
    red: style.red,
    yellow: style.yellow,
    green: style.green
}
const IconButton = ({onClick, icon, color, ...rest}) => {
    const Icon = ICONS[icon ?? 'refresh'];
  return (
    <button className={style.iconButton} onClick={onClick} {...rest}><Icon className={`${style.icon} ${COLOR_CLASS[color]}`} /></button>
  )
}

IconButton.propTypes = {}

export default IconButton