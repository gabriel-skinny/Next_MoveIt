import { useContext } from "react";
import { ChallangeContext } from "../contexts/ChallangesContext";
import { CountdownContext } from "../contexts/CountDownContext";

import styles from "../styles/components/ChallangeBox.module.css";

export function ChallengeBox(){
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallangeContext)
  const { resetCountDown } = useContext(CountdownContext);

  function handleChallengeFailure(){
    resetChallenge();
    resetCountDown();
  }

  function handleChallengeSuccess(){
    completeChallenge();
    resetCountDown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {!!activeChallenge ? (
        <div className={styles.challangeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="img"/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button 
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailure}
            >
              Falhei
            </button>
            <button 
              type="button"
              className={styles.challengeSuccededButton}
              onClick={handleChallengeSuccess}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um cilco para receber desafior para serem completados</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up"/>
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  )
}