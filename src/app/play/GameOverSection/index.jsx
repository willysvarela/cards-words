import React from 'react'
import Button from '@/components/Button'
import style from './style.module.scss'
import { TEAMS } from '@/utils/constant'

const GameOverSection = ({scoreA = 0, scoreB = 0}) => {
  const teamWinner = scoreA > scoreB ? TEAMS.teamA : TEAMS.teamB;
  const isDraw = scoreA === scoreB;

  return (
    <div>
      <div className={style.banner}>
        <div className={`${style.score} ${style.teamA}`}>
          <span>Acertos</span>
          <span>{scoreA}</span>
        </div>
        <div className={`${style.score} ${style.teamB}`}>
          <span>Acertos</span>
          <span>{scoreB}</span>
        </div>
      </div>
      <div className={style.winner}>
        <span>Vencedor</span>

        {!isDraw && <div className={teamWinner === TEAMS.teamA ? style.teamA : style.teamB}>Equipe <span>{teamWinner}</span></div>}
        {isDraw && <div className={style.draw}><span>EMPATE</span></div>}
      </div>
      <div className={style.button}>
        <Button as="link" href='/'>Início</Button>
      </div>
      
    </div>
  )
}

GameOverSection.propTypes = {}

export default GameOverSection