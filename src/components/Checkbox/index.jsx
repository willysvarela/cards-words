import React from 'react'
import PropTypes from 'prop-types'
import style from './style.module.scss'

const Checkbox = ({label, id, ...rest}) => {
  return (
    <div className={style.checkbox}>
        <input type='checkbox' id={id} />
        <label for={id}>{label}</label>
    </div>
  )
}

Checkbox.propTypes = {}

export default Checkbox