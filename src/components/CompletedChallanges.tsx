import { useContext } from 'react';
import { ChallangeContext } from '../contexts/ChallangesContext';
import styles from '../styles/components/CompletedChallanges.module.css';

export function CompletedChalanges(){
  const { challengesCompleted } = useContext(ChallangeContext);
  
  return (
    <div className={styles.completedContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}