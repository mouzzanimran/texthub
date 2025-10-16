import React, { useState } from "react";
import axios from "axios";
import "./Refiner.css";

const Refiner = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [target, setTarget] = useState("poetic english");
  const [loading, setLoading] = useState(false);

  const handleConvert = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    setOutputText("");

    try {
      const response = await axios.post("https://texthub.onrender.com/api/refiner", {
        text: inputText,
        target, // send the theme to backend
      });

      const generatedText = response.data?.refinedText;

      setOutputText(generatedText || "⚠️ No response from model.");
    } catch (err) {
      console.error("Error:", err.response || err);
      setOutputText("⚠️ Error occurred. Check console.");
    }

    setLoading(false);
  };

  return (
    <div className="page-wrapper">
      <img className="left-image" src="poetry.png" alt="Left" />

      <div className="app-container">
        <h1 className="app-title">Refine your English</h1>

        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter your text..."
          rows="5"
        />

        <p>Select your theme</p>
        <select value={target} onChange={(e) => setTarget(e.target.value)}>
          <option value="poetic english">Poetic English</option>
          <option value="shakespearean style">Shakespearean Style</option>
          <option value="modern english">Modern English</option>
          <option value="formal tone">Formal Tone</option>
          <option value="casual tone">Casual Tone</option>
          <option value="gen z english">Gen Z English</option>
        </select>

        <button onClick={handleConvert} disabled={loading}>
          {loading ? "Converting..." : "Convert"}
        </button>

        <div className="output-area">
          {outputText || "Output will appear here..."}
        </div>
      </div>

      <img className="right-image" src="poetryai.png" alt="Right" />
    </div>
  );
};

export default Refiner;
