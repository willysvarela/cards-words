'use client'

import Button from '@/components/Button'
import Input from '@/components/Input';
import { useState } from 'react';
import style from './style.module.scss';
import Checkbox from '@/components/Checkbox';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Main from '@/components/Main';

export default function Config() {
    const [timeValue, setTimeValue] = useState('');
    const [checked, setChecked] = useState(false);
  const onChangeTimeValue = (e) => {
    setTimeValue(e.target.value);
    console.log(e);
  }
  return (
    <main>
      <Navbar className={style.navbar}>
      <span className={style.title}>Opções</span>
      <Link href="/" className={style.link}>Voltar</Link>
      </Navbar>
      <Main>
        <div className={style.optionsForm}>
        <Input label="Tempo (minutos)" type="number" min="1" max="5" value={timeValue} onChange={onChangeTimeValue} id="time-input" />
        <Checkbox id="pass-input" label="Passa ao Errar" checked={checked} onChange={() => setChecked(oldValue => !oldValue)}/>
        </div>
      </Main>
    </main>
  )
}
