import React, { useState } from "react";
import axios from "axios";
import "./Refiner.css";

const Paraphraser = () => {
  const [inputText, setInputText] = useState("");
  const [paraphrasedText, setParaphrasedText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleParaphrase = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    setParaphrasedText("");

    try {
      const response = await axios.post("https://texthub.onrender.com/api/paraphraser", {
        text: inputText,
      });

      const result = response.data?.paraphrasedText || "⚠️ No paraphrased text returned.";
      setParaphrasedText(result);
    } catch (err) {
      console.error("Error:", err.response || err);
      setParaphrasedText("⚠️ Error occurred while paraphrasing.");
    }

    setLoading(false);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Paraphraser</h1>

      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to paraphrase..."
        rows="6"
      />

      <button onClick={handleParaphrase} disabled={loading}>
        {loading ? "Paraphrasing..." : "Paraphrase"}
      </button>

      <div className="output-area">
        {paraphrasedText || "Your paraphrased text will appear here..."}
      </div>
    </div>
  );
};

export default Paraphraser;
