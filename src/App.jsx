import "./App.css";
import { Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import Questions from "./pages/Questions";
function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/question" element={<Questions />} />
      </Routes>
    </>
  );
}

export default App;
