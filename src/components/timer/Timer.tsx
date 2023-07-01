import  { FC, useState, useEffect } from 'react'
import { useInterval } from '../../core/hooks/useInterval'
import './timer.scss'

enum TimerMode {
  Pomodoro = 'POMODORO',
  Timer = 'TIMER'
}

const Timer: FC = () => {
  const { startInterval, stopInterval } = useInterval()
  // const [endTimeValue, setEndTimeValue] = useState<number>(1500)
  const [currTimeValue, setCurrTimeValue] = useState<number>(1500)

  const timer = useState<number>(0)

  useEffect(() => {
    
    // startInterval(() => console.log('hi'), 1000)

    // return stopInterval
  }, [])

  const start = (): void => {
    const startTime = new Date().getTime()
    const endTime = startTime + 1500000 - 60000;

    startInterval(() => {
      setCurrTimeValue(Math.round((endTime - new Date().getTime()) / 1000))
      if (currTimeValue <= 0) {
        stopInterval()
      }
    }, 1000)


  }

  return (
    <div className="timer w-full h-full m-auto">
      <TimerDisplay time={currTimeValue}/>
      <div className='flex justify-around'>
        <button className='' onClick={start}>Начать</button>
        <button>Пауза</button>
        <button>Закончить</button>
      </div>
    </div>
  )
}
  
// ВОЗМОЖНО ЭТОТ КОМПОНЕНТ БЕСПОЛЕЗЕН
const TimerDisplay: FC<{time: number}> = ({ time }) => {

  const minutes = `${Math.round(time / 60)}`.padStart(2, "0")
  const seconds = `${time % 60}`.padStart(2, "0")
  return (
    <div className='timer__result flex justify-center items-center'>
      {minutes}:{seconds}
    </div>
  )
}

  

export default Timer