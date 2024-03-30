import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Uploadpdf from "./pages/Uploadpdf";
import { useState } from "react";
function App() {
  const [data, setData] = useState([]);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage setData={setData} />} />
          <Route path="/upload" element={<Uploadpdf setData={setData} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
