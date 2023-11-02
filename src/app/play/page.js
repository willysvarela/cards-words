'use client';

import Card from "@/components/Card"
import Navbar from "@/components/Navbar"
import style from './style.module.scss'
import IconButton from "@/components/IconButton"
import Main from "@/components/Main"
import { TEAMS } from "@/utils/constant"
import { useEffect, useRef, useState } from "react"
import { chooseCard } from "./cards";
import words from "@/database/words";

export default function Play() {
  const mounted = useRef(false);
  const [card, setCard] = useState(null);
  
  useEffect(() => {
    if(mounted.current) {
      setCard(updateCard());
    }
    mounted.current = true;
  }, [])

  const updateCard = () => {
    const word = chooseCard(words);
    return word;
  }

  const onHitWord = () => {
    //update score
    setCard(updateCard());
  }

  const timer = '01:00';
  const scoreA = 20;
  const scoreB = 30;
  const currentTeam = TEAMS.teamB;
  return (
    <div>
      <Navbar className={style.navbar}>
        <span className={style.timer}>{timer}</span>
        <span className={style.score}>
          <span className={style.scoreA}>{scoreA}</span>/
          <span className={style.scoreB}>{scoreB}</span>
        </span>
      </Navbar>
      <Main>
        <span className={`${style.teamTitle}`}>Equipe <span className={currentTeam === TEAMS.teamA ? style.teamA : style.teamB}>{currentTeam}</span></span>
        <Card card={card} color={currentTeam}/>
        <div className={style.buttons}>
        <IconButton icon='close' color="red"/>
        <IconButton icon='refresh' color="yellow"/>
        <IconButton icon='check' color="green" onClick={onHitWord}/>
        </div>
    </Main>
    </div>
  )
}
