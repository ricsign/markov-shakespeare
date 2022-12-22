import React, { useRef } from "react";

export default function SelectLength({ setPage, setLength }) {
  const inputLength = useRef();
  return (
    <div>
      <div className="styled-select">
        <label htmlFor="length" className="label">
          <h2>Length of Passage</h2>
        </label>
        <select id="length" name="length" ref={inputLength}>
          <option value="5" selected>
            Instagram Text
          </option>
          <option value="12">Short Sentence</option>
          <option value="30">Long Setence</option>
          <option value="100">Short Paragraph</option>
          <option value="300">Long Paragraph</option>
          <option value="600">Short Essay</option>
          <option value="1200">Long Essay</option>
          <option value="3000">Literature</option>
          <option value="6000">Super Literature</option>
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
            setLength(inputLength.current.value);
          }}
        >
          <span>→</span>
        </button>
      </div>
    </div>
  );
}
