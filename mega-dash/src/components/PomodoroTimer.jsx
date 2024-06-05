import React, { useState, useEffect, useRef } from 'react';
import '/home/codio/workspace/mega-dash/src/components/PomodoroTimer.css'
import tomatoImage from '/home/codio/workspace/mega-dash/src/components/img/tomato.jpg'

const PomodoroTimer = () => {
    const [secondsLeft, setSecondsLeft] =
    useState(1500); //25 minutes
    const [isActive, setisActive] =
    useState(false);
    const [isBreak, setisBreak] =
    useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isActive && secondsLeft > 0){
            intervalRef.current = setInterval(() => {
                setSecondsLeft((prev) => prev - 1);
            }, 1000);
        } else if (secondsLeft === 0){
            if (isBreak){
                setSecondsLeft(1500); //25 minutes work session
            } else {
                setSecondsLeft(300); //5 minutes break
            }
            setisBreak(!isBreak);
            setisActive(false);
        } else {
            clearInterval(intervalRef.current);
        }
        
        return () => 
        clearInterval(intervalRef.current);
    }, [isActive, secondsLeft, isBreak]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ?'0' : ''}${remainingSeconds}`;
    };
    const handleStartStop = () => {
        setisActive(!isActive);
    };

    const handleReset = () => {
        clearInterval(intervalRef.current);
        setisActive(false);
        setisBreak(false);
        setSecondsLeft(1500);
    };

    return (
        <div className="pomodoro-timer">
            <div className="timer-display">
                <div className="tomato">
                    <img src={tomatoImage} alt="Tomato"/>
                    <div className="time">
                        {formatTime(secondsLeft)}
                    </div>
                </div>
            </div>
            <div className="controls">
                <button onClick={handleStartStop}>
                    {isActive ? 'pause' : 'Start'}
                </button>
                <button onClick={handleReset}>Reset</button>
            </div>
            <div className="status">
                {isBreak ? 'Break Time' : 'Work Time'}
            </div>
        </div>
    );
};

export default PomodoroTimer