import { useEffect, FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import TimerPage from '../pages/TimerPage'
import TodosPage from '../pages/Todos'
import StatsPage from '../pages/Stats'

const App: FC = () => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark")
  }, [])

  return (
    <Routes>
      <Route path="/" element={<TimerPage />} />
      <Route path="/todos" element={<TodosPage />} />
      <Route path="/stats" element={<StatsPage />} />
    </Routes>
  )
}

export default App
