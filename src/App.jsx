import React, { useState, useEffect } from "react";
import { cushions } from "./images";
import "./App.css";

function App() {
  const [cushionCount, setCushionCount] = useState(1);

  const increment = () => {
    if (cushionCount < 10) {
      setCushionCount((cc) => (cc += 1));
    }
  };

  const decrement = () => {
    if (cushionCount > 1) {
      setCushionCount((cc) => (cc -= 1));
    }
  };

  useEffect(() => {
    if (cushionCount % 2 === 0) {
      window.document.body.style.backgroundColor = "pink";
    } else {
      window.document.body.style.backgroundColor = "white";
    }
  }, [cushionCount]);

  // preloading images
  useEffect(() => {
    cushions.forEach((cushionImage) => {
      const img = new Image();
      img.src = cushionImage;
    });
  }, []);

  return (
    <>
      <h1 className="title">Combien d'oreillers dans votre vie ?</h1>
      <img
        className="cushion-image"
        src={cushions[cushionCount - 1]}
        alt={`${cushionCount} cushion${cushionCount > 1 ? "s" : null}`}
      />
      <div className="counter-container">
        <div className="counter">
          <button
            className="btn"
            style={{ visibility: cushionCount > 1 ? "visible" : "hidden" }}
            onClick={decrement}
          >
            -
          </button>
          <div className="cushion-count">{cushionCount}</div>
          <button
            className="btn"
            style={{ visibility: cushionCount < 10 ? "visible" : "hidden" }}
            onClick={increment}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
