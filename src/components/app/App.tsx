import { useEffect, FC } from "react";
import { Routes, Route } from "react-router-dom";
import TimerPage from "../pages/TimerPage";
import TodosPage from "../pages/Todos";
import StatsPage from "../pages/Stats";
import InfoPage from "../pages/InfoPage";

const App: FC = () => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  return (
    <Routes>
      <Route path="/timer" element={<TimerPage />} />
      <Route path="/todos" element={<TodosPage />} />
      <Route path="/stats" element={<StatsPage />} />
      <Route path="/info" element={<InfoPage />} />
    </Routes>
  );
};

export default App;
