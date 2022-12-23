import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Result({ setPage, level, word, length }) {
  const [text, setText] = useState("");

  useEffect(() => {
    axios
      .get("/generate", {
        params: { training_size: level, length: length, initial_word: word },
      })
      .then((res) => setText(res.data.text));
  }, []);

  return (
    <div>
      <h2 className="result-h2">Result</h2>
      <div className="result-textarea">{text}</div>
      <button
        className="step-button"
        onClick={() => {
          setPage(1);
        }}
      >
        <span>↻</span>
      </button>
    </div>
  );
}
