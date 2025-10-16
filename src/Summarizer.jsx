import React, { useState } from "react";
import axios from "axios";
import "./Refiner.css"; // same theme styling

const Summarizer = () => {
  const [inputText, setInputText] = useState("");
  const [summaryText, setSummaryText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    setSummaryText("");

    try {
      console.log("Sending request to backend:", { inputText });

      const response = await axios.post("https://texthub.onrender.com/api/summarize", {
        inputText,
      });

      const generatedSummary = response.data?.summary;

      if (generatedSummary) {
        setSummaryText(generatedSummary);
      } else {
        setSummaryText("⚠️ No summary returned by model.");
      }
    } catch (err) {
      console.error("Error:", err.response || err);
      setSummaryText("⚠️ Error occurred. Check console.");
    }

    setLoading(false);
  };

  return (
    <div className="page-wrapper">
      <div className="app-container">
        <h1 className="app-title">Summarize Your Text</h1>

        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Paste your text here..."
          rows="6"
        />

        <button onClick={handleSummarize} disabled={loading}>
          {loading ? "Summarizing..." : "Summarize"}
        </button>

        <div className="output-area">
          {summaryText || "Your summarized text will appear here..."}
        </div>
      </div>
    </div>
  );
};

export default Summarizer;
