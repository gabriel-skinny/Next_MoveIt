import { GetServerSideProps } from 'next';

import { CompletedChalanges } from '../components/CompletedChallanges';
import { CountDown } from '../components/CountDown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallangeBox';
import { ChallangesProvider } from '../contexts/ChallangesContext';
import { ContdownProvider } from "../contexts/CountDownContext";

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';

export default function Home(props) {
  return (
    <ChallangesProvider 
      level={props.level} 
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | MOVEIT</title>
        </Head>
        
        <ExperienceBar />
        <ContdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChalanges />
              <CountDown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </ContdownProvider>
      </div>
    </ChallangesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level), 
      currentExperience: Number(currentExperience), 
      challengesCompleted: Number(challengesCompleted)
    }
  }
}