import { useEffect, FC } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

import TimerPage from "../pages/TimerPage";
import TodosPage from "../pages/Todos";
import StatsPage from "../pages/Stats";
import InfoPage from "../pages/InfoPage";
import AccountPage from "../pages/AccountPage";

const App: FC = () => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<TimerPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
