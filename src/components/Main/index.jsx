import React from 'react'
import PropTypes from 'prop-types'
import style from './style.module.scss'

const Main = ({children}) => {
  return (
    <div className={style.main}>{children}</div>
  )
}

Main.propTypes = {}

export default Main