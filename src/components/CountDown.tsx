import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountDownContext';

import styles from '../styles/components/CountDown.module.css';

export function CountDown(){
  const { 
    minutes, 
    seconds, 
    active, 
    startCountDown, 
    resetCountDown, 
    hasFinished
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");  

  return (
    <>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {!active ? (
        <button 
        type="button" 
        disabled = {hasFinished}
        className={styles.startCountdownButton} 
        onClick={startCountDown}
      >
        {hasFinished ? "Ciclo Encerrado" : "Iniciar Ciclo"}
      </button>
      ) : (
        <button 
        type="button" 
        className={`${styles.startCountdownButton} ${styles.stopCountdownButton}`} 
        onClick={resetCountDown}
      >
        Parar ciclo
      </button>
      )}
    </>
  )
}