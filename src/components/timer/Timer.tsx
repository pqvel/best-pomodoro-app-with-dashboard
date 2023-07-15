import  { FC, useState, useEffect } from 'react'
import { useInterval } from '../../core/hooks/useInterval'
import './timer.scss'

enum TimerMode {
  Pomodoro = 'POMODORO',
  Timer = 'TIMER'
}

enum TimerStatus {
  Break = 'BREAK',
  Timer = 'TIMER',
  Pause = 'PAUSE',
  Idle = 'IDLE',
}

const Timer: FC = () => {
  const { startInterval, stopInterval } = useInterval()
  
  const [currTimeValue, setCurrTimeValue] = useState<number>(1500)
  // const [activeColor, setActiveColor] = useState<string>("red")
  const [status, setStatus] = useState<TimerStatus>(TimerStatus.Idle)

  const timer = useState<number>(0)

  useEffect(() => {
    
    // startInterval(() => console.log('hi'), 1000)

    // return stopInterval
  }, [])

  const start = (): void => {
    const startTime = new Date().getTime()
    // const endTime = startTime + 1500000 - 60000;
    
    setStatus(TimerStatus.Timer)
    startInterval(() => {
      setCurrTimeValue(Math.round((startTime + 1500000 - 60000 - new Date().getTime()) / 1000))
      if (currTimeValue <= 0) {
        stopInterval()
      }
    }, 1000)
  }

  const pause = () => {
    setStatus(TimerStatus.Pause)
    stopInterval()
  }

  const stop = () => {
    setStatus(TimerStatus.Idle)
    stopInterval()
    setCurrTimeValue(1500)
  }

  const continueTimer = () => {
    const startTime = new Date().getTime()
    setStatus(TimerStatus.Timer)
    startInterval(() => {
      alert(currTimeValue)
      alert(Math.round((currTimeValue - new Date().getTime()) / 1000))
      setCurrTimeValue(Math.round((currTimeValue - new Date().getTime()) / 1000))
      if (currTimeValue <= 0) {
        stopInterval()
      }
    }, 1000)
  }

  return (
    <div className={`timer w-full h-full m-auto red`}>
      <TimerDisplay time={currTimeValue}/>
      <TimerButtons 
        status={status} 
        startHadnler={start} 
        pauseHandler={pause} 
        continueHandler={continueTimer}
        stopHandler={stop}
      />

    </div>
  )
}
  
const TimerDisplay: FC<{time: number}> = ({ time }) => {
  const minutes = `${Math.round(time / 60)}`.padStart(2, "0")
  const seconds = `${time % 60}`.padStart(2, "0")

  return (
    <div className='timer__result flex justify-center items-center'>
      {minutes}:{seconds}
    </div>
  )
}


type TimerButtonsProps = {
  status: TimerStatus;
  pauseHandler: () => void
  startHadnler: () => void
  stopHandler: () => void
  continueHandler: () => void
}

const TimerButtons: FC<TimerButtonsProps> = ({status, startHadnler, continueHandler, stopHandler, pauseHandler}) => {

  if (status === TimerStatus.Timer) {
    return (
      <div className='flex justify-around'>
        <button className='timer__btn' onClick={pauseHandler}>Пауза</button>
        <button className='timer__btn' onClick={stopHandler}>Закончить</button>
      </div>  
    )
  }

  if (status === TimerStatus.Pause) {
    return (
      <div className='flex justify-around'>
        <button className='timer__btn' onClick={continueHandler}>Возобновить</button>
        <button className='timer__btn' onClick={stopHandler}>Закончить</button>
      </div>  
    )
  }

  return (
    <div className='flex justify-around'>
      <button className='timer__btn' onClick={startHadnler}>Начать</button>
      <button className='timer__btn' onClick={pauseHandler}>Пауза</button>
    </div>
  )
}
  

export default Timer