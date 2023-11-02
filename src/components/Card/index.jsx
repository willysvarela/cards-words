import React from 'react'
import PropTypes from 'prop-types'
import style from './style.module.scss'
import { TEAMS } from '@/utils/constant'

const Card = ({card, color}) => {
    const cardToDisplay = card ?? {word: 'PALAVRA', forbidden_words: ['', '', '', '', '']};
    return (
    <div className={`${style.card} ${ color === TEAMS.teamA ? style.teamA : style.teamB}`}>
        <div className={style.header}>
            <span>{cardToDisplay.word}</span>
        </div>
        <div className={style.forbiddenWords}>
            {cardToDisplay.forbidden_words.map((word, index) => (
                <span key={`${cardToDisplay.word}-${word}-${index}`}>
                    {word}
                </span>)
            )}
        </div>
    </div>
  )
}

Card.propTypes = {}

export default Card