import React, { useState } from "react";
import "./Simplifier.css"; // unified theme for all tools

export default function Simplifier() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSimplify = async () => {
    if (!text.trim()) return;
    setLoading(true);
    try {
      const response = await fetch("https://texthub.onrender.com/api/simplifier", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();
      setOutput(data.simplifiedText || "No simplification applied.");
    } catch (err) {
      setOutput("Error: Could not connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="refine-container">
      <h2 className="refine-heading">Simplifier</h2>

      <textarea rows ={8}
        className="refine-input"
        placeholder="Enter complex text to simplify..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <button
        className="refine-button"
        onClick={handleSimplify}
        disabled={loading}
      >
        {loading ? "Simplifying..." : "Simplify Text"}
      </button>

      <textarea rows ={8}
        className="refine-output my-4"
        placeholder="Simplified version will appear here..."
        value={output}
        readOnly
      ></textarea>
    </div>
  );
}
