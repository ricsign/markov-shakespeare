import React from "react";

export default function Result({setPage, level, word, length}) {
  return (
    <div>
        <div>{level}</div>
        <div>{word}</div>
        <div>{length}</div>
    </div>
    
  );
}
