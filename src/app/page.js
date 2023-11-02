'use client'

import Button from '@/components/Button'
import style from './style.module.scss'
export default function Home() {
  const onClickPlay = (e) => {
    
    console.log({e});
  }
  return (
    <main>
      <div className={style.container}>
        <h1 className={style.title}>BIBLOO</h1>
        <div className={style.buttons}>

        <Button as="link" href="/play" color="green">Jogar</Button>
        <Button as="link" href="/config" onClick={onClickPlay} color="orange">Opções</Button>
        <Button as="link" href="/config" onClick={onClickPlay} color="orange">Regras</Button>
        </div>
      </div>
    </main>
  )
}
