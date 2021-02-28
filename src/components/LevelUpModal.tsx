import styles from '../styles/components/LevelUpModal.module.css';

import { SetStateAction, useContext } from 'react'
import { ChallangeContext } from '../contexts/ChallangesContext';

interface LevelUpModalProps {
  setShowModal: (value: SetStateAction<boolean>) => void;
}

export function LevelUpModal({ setShowModal }: LevelUpModalProps){
  
  const { level } = useContext(ChallangeContext);
  
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={() => setShowModal(false)}>
          <img src="/icons/close.svg" alt="Fechar modal"/>
        </button>
      </div>
    </div>
  )
}