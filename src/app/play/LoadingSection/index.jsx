import React, { use, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.scss'
import { TEAMS } from '@/utils/constant';
const LoadingSection = ({team, onFinished}) => {
    const [timer, setTimer] = useState(3);
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(oldValue => oldValue - 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    useEffect(() => {
        if(timer < 0) {
            onFinished();
        }
    }, [timer, onFinished]);
    return (timer >= 0 &&
            <div className={style.loadingSection}>
                <div className={`${style.banner} ${
                        team === TEAMS.teamA ?
                            style.teamA :
                            style.teamB
                        }`}
                >
                    <span>Equipe {team}</span>
                </div>
                <div className={style.timer}>
                    <span className={style.title}>Iniciando em</span>
                    <span className={style.time}>{timer}</span>
                </div>
            </div>
    )
    }

LoadingSection.propTypes = {}

export default LoadingSection