'use client';

import Card from "@/components/Card"
import style from '../style.module.scss'
import IconButton from "@/components/IconButton"
import { TEAMS } from "@/utils/constant"
import { useEffect, useRef, useState } from "react"
import { chooseCard } from "./cards";
import words from "@/database/words";

export default function PlaySection({team, onHit, onFail}) {
  const mounted = useRef(false);
  const [hasChangedWord, setHasChangedWord] = useState(false);
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
    onHit();
  }

  const onFailWord = () => {
    onFail();
    setHasChangedWord(false);
  }

  const onChangeWord = () => {
    setCard(updateCard());
    setHasChangedWord(true);
  }

  return (
    <div>
        <span className={`${style.teamTitle}`}>Equipe <span className={team === TEAMS.teamA ? style.teamA : style.teamB}>{team}</span></span>
        <Card card={card} color={team}/>
        <div className={style.buttons}>
        <IconButton icon='close' color="red" onClick={onFailWord}/>
        <IconButton icon='refresh' color="yellow" onClick={onChangeWord} disabled={hasChangedWord}/>
        <IconButton icon='check' color="green" onClick={onHitWord}/>
        </div>
    </div>
  )
}
