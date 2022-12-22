import React, { useRef } from "react";

export default function SelectLevel({setPage, setLevel}) {
  const inputLevel = useRef();
  return (
    <div>
      <div className="styled-select">
        <label htmlFor="level" className="label">
          <h2>Level</h2>
        </label>
        <select id="level" name="level" ref={inputLevel}>
          <option value="5" selected>
            Junior
          </option>
          <option value="15">Intermediate</option>
          <option value="30">Advanced</option>
          <option value="50">Master</option>
          <option value="100">William Shakespeare</option>
          <option value="300">Super William Shakespeare</option>
          <option value="700">Markov Shakespeare</option>
          <option value="1500">Super Markov Shakespeare</option>
        </select>
        <div className="select-button">
          {/* <div className="small-arrow-down"></div> */}
        </div>
      </div>

      <div>
        <button
          className="step-button"
          onClick={() => {
            setPage((x) => x + 1);
            setLevel(inputLevel.current.value);
          }}
        >
          <span>→</span>
        </button>
      </div>
    </div>
  );
}
