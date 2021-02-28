import { useContext } from 'react'
import { ChallangeContext } from '../contexts/ChallangesContext'
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallangeContext);
  
  const percentualToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentualToNextLevel}%`}}/>

        <span className={styles.currentExperience } style={{ left: `${percentualToNextLevel}%`}}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel}xp</span>
    </header>
  )
}