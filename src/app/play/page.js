'use client';

import Navbar from "@/components/Navbar"
import style from './style.module.scss'
import Main from "@/components/Main"
import { SECTIONS, TEAMS } from "@/utils/constant"
import { useEffect, useRef, useState } from "react"
import { chooseCard } from "./PlaySection/cards";
import words from "@/database/words";
import PlaySection from "./PlaySection";
import PassSection from "./PassSection";
import GameOverSection from "./GameOverSection";
import LoadingSection from "./LoadingSection";


export default function Play() {
  const [turnScore, setTurnScore] = useState(0);
  const [scores, setScores] = useState({[TEAMS.teamA]: 0, [TEAMS.teamB]: 0});
  const [timer, setTimer] = useState('00:00');
  const [currentTeam, setCurrentTeam] = useState(TEAMS.teamA);
  const [currentSection, setCurrentSection] = useState(SECTIONS.play);

  const onHit = () => {
    console.log({hit: scores});
    setScores(oldValue => ({ ...oldValue, [currentTeam]: oldValue[currentTeam] + 1}));
    setTurnScore(oldValue => oldValue+1);
  }

  const onFail = () => {
    setCurrentTeam(oldTeam => oldTeam === TEAMS.teamA ? TEAMS.teamB : TEAMS.teamA);
    setTurnScore(0);
    setCurrentSection(SECTIONS.pass);
  }

  const onStart = () => {
    setCurrentSection(SECTIONS.loading);
  }

  const onFinishGame = () => {
    setCurrentSection(SECTIONS["game-over"]);
  }

  const onFinishedLoading = () => {
    setCurrentSection(SECTIONS.play);
  }

  return (
    <div>
      <Navbar className={style.navbar}>
        <span className={style.timer}>{timer}</span>
        <span className={style.score}>
          <span className={style.scoreA}>{scores[TEAMS.teamA]}</span>/
          <span className={style.scoreB}>{scores[TEAMS.teamB]}</span>
        </span>
      </Navbar>
      <Main>

      {currentSection === SECTIONS.play && <PlaySection team={currentTeam} onHit={onHit} onFail={onFail} />}
      {currentSection === SECTIONS.pass && <PassSection team={currentTeam} onStart={onStart} onFinishGame={onFinishGame} />}
      {currentSection === SECTIONS.loading && <LoadingSection team={currentTeam} onFinished={onFinishedLoading} />}
      
      {currentSection === SECTIONS["game-over"] && <GameOverSection team={currentTeam} />}
    </Main>
    </div>
  )
}
