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
import Timer from "@/components/Timer";


export default function Play() {
  const [turnScore, setTurnScore] = useState(0);
  const [scores, setScores] = useState({[TEAMS.teamA]: 0, [TEAMS.teamB]: 0});
  const [currentTeam, setCurrentTeam] = useState(TEAMS.teamA);
  const [currentSection, setCurrentSection] = useState(SECTIONS.loading);

  const onHit = () => {
    setScores(oldValue => ({ ...oldValue, [currentTeam]: oldValue[currentTeam] + 1}));
    setTurnScore(oldValue => oldValue+1);
  }

  const onFail = () => {
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

  const onFinishTimer = (e) => {
    console.log({ test: 'test', e });
    setCurrentSection(SECTIONS.pass);
  }

  const startNewTurn = () => {
    setTurnScore(0);
    setCurrentTeam(oldTeam => oldTeam === TEAMS.teamA ? TEAMS.teamB : TEAMS.teamA);
  }

  useEffect(() => {
    if(currentSection === SECTIONS.play) {
    }
    if(currentSection === SECTIONS.loading) {
      startNewTurn();
    }
  }, [currentSection]);
  return (
    <div>
      <Navbar className={style.navbar}>
        <Timer className={style.timer} onFinishTimer={onFinishTimer} active={currentSection === SECTIONS.play} initialTime={5} />
        <span className={style.score}>
          <span className={style.scoreA}>{scores[TEAMS.teamA]}</span>/
          <span className={style.scoreB}>{scores[TEAMS.teamB]}</span>
        </span>
      </Navbar>
      <Main>

      {currentSection === SECTIONS.play && <PlaySection team={currentTeam} onHit={onHit} onFail={onFail} />}
      {currentSection === SECTIONS.pass && <PassSection team={currentTeam} turnScore={turnScore} onStart={onStart} onFinishGame={onFinishGame} />}
      {currentSection === SECTIONS.loading && <LoadingSection team={currentTeam} onFinished={onFinishedLoading} />}
      
      {currentSection === SECTIONS["game-over"] && <GameOverSection team={currentTeam} />}
    </Main>
    </div>
  )
}
