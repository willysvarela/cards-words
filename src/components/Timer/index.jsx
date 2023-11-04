import React, { useEffect, useState } from 'react'

const Timer = ({onFinishTimer, className, initialTime, active}) => {
    const [intervalId, setIntervalId] = useState(null);
    const [timer, setTimer] = useState('00:00');
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        if(active) {
            const interval = setInterval(() => {
                setTime(oldValue => oldValue - 1)
            }, 1000);
            setIntervalId(interval);
            return () => {
                clearInterval(interval);
            }
        } else {
            setTime(initialTime);
        }
    }, [active, initialTime]);

    const parseTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');
        return `${formattedMinutes}:${formattedSeconds}`;
    };

    useEffect(() => {
        setTimer(parseTime(time));
        if(time === 0) {
            clearInterval(intervalId);
            onFinishTimer();
        }
    }, [intervalId, onFinishTimer, time]);

    return (
        <span className={className}>{timer}</span>
    )
}

Timer.propTypes = {}

export default Timer