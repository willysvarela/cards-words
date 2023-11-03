import React, { use, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const LoadingSection = ({onFinished}) => {
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
        console.log({timer})
        if(timer < 0) {
            onFinished();
        }
    }, [timer, onFinished]);
    return (timer >= 0 &&
            <div>{timer}</div>   
    )
    }

LoadingSection.propTypes = {}

export default LoadingSection