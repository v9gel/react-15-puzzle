import React, { useState } from "react";
import "./reset.css";
import "./App.css";

import { Block } from "./Block";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Block title={1} position={{ x: 0, y: 0 }}></Block>
    </div>
  );
}

export default App;
