'use client'

import Button from '@/components/Button'
import style from './style.module.scss'
import ButtonsList from '@/components/ButtonsList';
export default function Home() {
  const onClickPlay = (e) => {
    
    console.log({e});
  }
  return (
    <main>
      <div className={style.container}>
        <h1 className={style.title}>BIBLOO</h1>
        <ButtonsList>
          <Button as="link" href="/play" color="green">Jogar</Button>
          {/* <Button as="link" href="/config" onClick={onClickPlay} color="orange">Opções</Button>
          <Button as="link" href="/config" onClick={onClickPlay} color="orange">Regras</Button> */}
        </ButtonsList>
      </div>
    </main>
  )
}
