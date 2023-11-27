import "./App.css";
import { Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import QuestionsLobby from "./pages/QuestionsLobby";
import Question from "./pages/Question"
function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/lobby" element={<QuestionsLobby />} />
          <Route path="/question" element={<Question />} />
      </Routes>
    </>
  );
}

export default App;
