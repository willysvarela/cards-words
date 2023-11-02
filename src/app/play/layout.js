'use client'

import { useState } from 'react';
import style from './style.module.scss';
import Navbar from '@/components/Navbar';
import Main from '@/components/Main';

export default function Layout({children}) {
  return (
    <main>
        {children}
    </main>
  )
}
