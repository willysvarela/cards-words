import React from 'react'
import PropTypes from 'prop-types'
import style from './style.module.scss'

const Navbar = ({children, className}) => {
  return (
    <nav className={`${style.navbar} ${className}`}>{children}</nav>
  )
}

Navbar.propTypes = {}

export default Navbar