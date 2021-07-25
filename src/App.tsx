import React, { useState } from "react";
import "./reset.css";
import "./App.css";

import puzzle from "./store/puzzle";
import Block from "./Block";
import { observer } from "mobx-react-lite";
import refresh from "./refresh.svg";

const App = observer(() => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {puzzle.blocks.map((p) => (
        <Block
          key={p.title}
          title={p.title}
          position={{ x: p.position.x, y: p.position.y }}
          draggable={p.draggable}
        ></Block>
      ))}
      <div className="border">
        <div className="steps">Ходов: {puzzle.countMoves}</div>
        <img src={refresh} className="refresh" alt="refresh" />
      </div>

      {/* <div className="steps">Ходов: {puzzle.countMoves}</div>
      <img src={refresh} className="refresh" alt="refresh" /> */}
    </div>
  );
});

export default App;
