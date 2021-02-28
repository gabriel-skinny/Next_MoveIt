import { createContext, ReactNode, useContext, useState, useEffect } from "react";

import { ChallangeContext } from '../contexts/ChallangesContext';

interface CountdownContextData {
  minutes:number;
  seconds: number;
  hasFinished: boolean;
  active: boolean;
  startCountDown: () => void;
  resetCountDown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;

export function ContdownProvider({ children }: CountdownProviderProps){
  const [time, setTime] = useState(0.1 * 60);
  const [active, setActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const { startNewChallenge } = useContext(ChallangeContext)
  
  function startCountDown(){
    setActive(true);
  }

  function resetCountDown(){
    clearTimeout(countdownTimeout);
    setActive(false);
    setTime(0.1 * 60);
    setHasFinished(false);
  }

  useEffect(() => {
    if(active && time > 0){
      countdownTimeout = setTimeout(() => {
        setTime(previous => previous - 1)
      }, 1000)
    }else if (active){
      setHasFinished(true);
      setActive(false);
      startNewChallenge();
    }
  }, [active, time])

  return (
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      active,
      startCountDown,
      resetCountDown
    }}>
      {children}
    </CountdownContext.Provider>
  )
}