import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Board from "./Board/Board";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Board />} />
      </Routes>
    </Router>
  );
}

export default App;
