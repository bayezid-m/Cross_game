import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Game from "./Components/Game";

function App() {
  return (
    <div className="App">
     <Router>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
