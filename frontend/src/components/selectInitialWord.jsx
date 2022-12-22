import React,  { useRef } from "react";

export default function SelectInitialWord({setPage, setWord}) {
    const inputWord = useRef();
  return (
    <div>
      <div className="styled-select">
        <label htmlFor="word" className="label">
          <h2>Initial Word</h2>
        </label>
        <input type="text" ref={inputWord} style={{background: "transparent"}} />
      </div>

      <div>
        <button className="step-button"
        onClick={() => {
            setPage(x => x + 1);
            setWord(inputWord.current.value);
          }}>
          <span>→</span>
        </button>
      </div>
    </div>
  );
}
