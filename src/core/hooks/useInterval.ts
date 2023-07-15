import { useState } from "react"

type UseIntervalReturnType = {
  startInterval: (callback: TimerHandler, timeout: number) => void
  stopInterval: () => void
}

export const useInterval = (): UseIntervalReturnType => {
  const [timerId, setTimerId] = useState<ReturnType<typeof setInterval>>()

  const startInterval = (callback: TimerHandler, timeout: number): void => {
    const timer = setInterval(callback, timeout)
    setTimerId(timer)
  }

  const stopInterval = (): void => {
    clearInterval(timerId)
  }

  return {
    startInterval,
    stopInterval
  }
}
