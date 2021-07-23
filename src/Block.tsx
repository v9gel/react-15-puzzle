import React, { useState } from "react";
import "./Block.css";

export const Block = () => {
  const [position, setPosition] = useState(0);

  return (
    <div
      className="block"
      onClick={() => setPosition((position) => position + 1)}
      style={{ transform: "translate(" + position * 100 + "px, 100px)" }}
    >
      {position}
    </div>
  );
};
