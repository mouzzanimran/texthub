import React from "react";
import { Link } from "react-router-dom"; // if you are using react-router
import "./Texthub.css";

export default function Texthub() {
  return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="home-title">Text Hub</h1>
        <div className="button-group">
          <Link to="/refiner" className="home-btn">Refiner</Link>
          <Link to="/paraphraser" className="home-btn">Paraphraser</Link>
          <Link to="/summarizer" className="home-btn">Summarizer</Link>
          <Link to="/grammarfix" className="home-btn">Grammar Fix</Link>
         
          <Link to="/simplifier" className="home-btn">Simplifier</Link>
        </div>
      </div>
    </div>
  );
}
