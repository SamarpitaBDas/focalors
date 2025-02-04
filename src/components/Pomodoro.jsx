import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
// import Dashboard from './Dashboard';
import furinaimage from '../items/raiden2.jpg'

const Pomodoro = () => {
  const [isRunning, setIsRunning] = useState(false); 
  const [timeLeft, setTimeLeft] = useState(55 * 60); 
  const [pomodorosCompleted, setPomodorosCompleted] = useState(0); 
  const [isBreakTime, setIsBreakTime] = useState(false); 
  const intervalIdRef = useRef(null); 

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalIdRef.current = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1); 
      }, 1000);
    } else if (!isRunning && intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [isRunning]); 

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const startTimer = () => {
    setIsRunning(true); 
  }
  const pauseTimer = () => {
    setIsRunning(false); 
  };

  const skipTimer = () => {
    setTimeLeft(0); 
  };

  const cancelTimer = () => {
    setIsRunning(false);
    setTimeLeft(isBreakTime ? (pomodorosCompleted >= 4 ? 20 * 60 : 5 * 60) : 55 * 60);
    setPomodorosCompleted(0);
  };

  useEffect(() => {
    if (timeLeft === 0) {
      if (isBreakTime) {
        if (pomodorosCompleted >= 4) {
          setPomodorosCompleted(0); 
        }
        setIsBreakTime(false); 
        setTimeLeft(55 * 60); 
      } else {
        setIsBreakTime(true);
        setPomodorosCompleted((prevCount) => prevCount + 1);
        setTimeLeft(pomodorosCompleted >= 4 ? 20 * 60 : 5 * 60); 
      }
    }
  }, [timeLeft, isBreakTime, pomodorosCompleted]);

  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-inner">
          <img className="background-image" src={furinaimage} alt="Background" />

          <div className="timer">
            <div className="time">{formatTime(timeLeft)}</div>
          </div>

          <div className="controls">
            {!isRunning && !isBreakTime && (
              <button onClick={startTimer}>Start</button>
            )}
            {isRunning && !isBreakTime && (
              <>
                <button onClick={pauseTimer}>Pause</button>
                <button onClick={skipTimer}>Skip</button>
              </>
            )}
            {(isBreakTime || timeLeft === 0) && (
              <button onClick={cancelTimer}>Cancel</button>
            )}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .card {
    width: 70em;
    height: 40em;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: rgba(255, 255, 255, 0.15);
    --r: 105px;
    --s: 220px;
    --_m: /calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%, #0000 72%) no-repeat;
    mask: right calc(var(--s) + var(--r)) top 0 var(--_m),
      right calc(var(--s) + var(--r)) var(--_m),
      radial-gradient(var(--s) at 100% 0, #0000 99%, #000 101%) calc(-1 * var(--r))
        var(--r) no-repeat,
      conic-gradient(at calc(100% - var(--s) - 2 * var(--r)) calc(var(--s) + 2 * var(--r)), #0000 25%, #000 0);

    transform: scaleX(-1) scaleY(-1); /* Flip the card */
    transition: transform 1s ease-in-out;
    transform-style: preserve-3d; /* Ensure content inside isn't flipped */
    position: relative; /* For the background image */
  }

  .card-inner {
    transform: scaleX(-1) scaleY(-1); /* Keep content upright */
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Keeps the timer at the top */
    margin-top: 2em;
    align-items: center;
    position: relative;
    z-index: 1; /* Ensure the content stays on top */
  }

  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40.5m;
    object-fit: cover;
    // opacity: 0.9; 
    z-index: -1; 
  }

  .timer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2; 
  }

  .time {
    font-weight: bold;
    color: white;
    font-size: 10em;
    margin-top: 0.5em;
  }

  .controls {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 19em; 
  }

  .controls button {
    padding: 0.8em 2em;
    margin: 1em;
    border-radius: 25px;
    border: none;
    font-weight: bold;
    background: #ffffff;
    color: rgb(0, 0, 0);
    transition: 0.4s ease-in-out;
  }

  .controls button:hover {
    background: red;
    color: white;
    cursor: pointer;
  }
`;



export default Pomodoro;
