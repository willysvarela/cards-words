import React from 'react'
import Button from '@/components/Button'
import ButtonsList from '@/components/ButtonsList'
import style from './style.module.scss'
import { TEAMS } from '@/utils/constant'
function PassSection({team, turnScore = 0, onStart, onFinishGame}) {
  const nextTeam = team === TEAMS.teamA ? TEAMS.teamB : TEAMS.teamA;
  return (
    <div className={style.passSection}>
      <div className={`${style.banner} ${team === TEAMS.teamA ? style.teamA : style.teamB}`}>
        <span className={style.turnLabel}>Acertos {team}</span>
        <span className={style.turnScore}>{turnScore}</span>
      </div>
      <h2 className={style.teamLabel}>Equipe <span className={nextTeam === TEAMS.teamA ? style.teamA : style.teamB}>{nextTeam}</span></h2>
      <ButtonsList>
        <Button onClick={onStart}>Começar</Button>
        <Button onClick={onFinishGame} color='orange'>Finalizar</Button>
      </ButtonsList>
    </div>
  )
}
      PassSection.propTypes = {}
export default PassSection