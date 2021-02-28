import { useContext } from 'react';
import { ChallangeContext } from '../contexts/ChallangesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
  const { level } = useContext(ChallangeContext);
  
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/gabriel-skinny.png" alt="Foto"/>
      <div>
        <strong>Gabriel Catoni</strong>
        <p>
          <img src="icons/level.svg" alt="Icon"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}