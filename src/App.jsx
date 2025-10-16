import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Texthub from "./Texthub";
import Refiner from "./Refiner";
import Paraphraser from "./Paraphraser";
import Summarizer from "./Summarizer";
import GrammarFix from "./GrammarFix";

import Simplifier from "./Simplifier";
import Feedback from "./Feedback"; // <-- import Feedback
import Navbar from "./Navbar";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Texthub />} />
        <Route path="/refiner" element={<Refiner />} />
        <Route path="/paraphraser" element={<Paraphraser />} />
        <Route path="/summarizer" element={<Summarizer />} />
        <Route path="/grammarfix" element={<GrammarFix />} />
       
        <Route path="/simplifier" element={<Simplifier />} />
        <Route path="/feedback" element={<Feedback />} /> {/* <-- add this */}
      </Routes>
    </Router>
  );
}

export default App;
