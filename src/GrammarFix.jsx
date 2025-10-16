import React, { useState } from "react";
import "./GrammarFix.css";

export default function GrammarFix() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGrammarFix = async () => {
    if (!text.trim()) return;
    setLoading(true);
    try {
      const response = await fetch("https://texthub.onrender.com/api/grammarfix", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();
      setOutput(data.fixedText || "No changes made.");
    } catch (err) {
      setOutput("Error: Could not connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="refine-container">
      <h2 className="refine-heading">Correct Grammar Mistakes</h2>
      <textarea  rows={8}
        className="refine-input"
        placeholder="Enter text with grammar mistakes..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <button
        className="refine-button"
        onClick={handleGrammarFix}
        disabled={loading}
      >
        {loading ? "Fixing..." : "Fix Grammar"}
      </button>

      <textarea rows={8}
        className="refine-output my-4"
        placeholder="Fixed text will appear here..."
        value={output}
        readOnly
      ></textarea>
    </div>
  );
}
