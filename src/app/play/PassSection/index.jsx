import React from 'react'
import PropTypes from 'prop-types'
import Button from '@/components/Button'

function PassSection({onStart, onFinishGame}) {
  return (

    <div>
      PassSection
      <Button onClick={onStart}>Começar</Button>
      <Button onClick={onFinishGame}>Finalizar</Button>
    </div>
  )
}

PassSection.propTypes = {}

export default PassSection
