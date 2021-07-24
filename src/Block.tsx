import React, { useState } from "react";
import "./Block.css";

export const Block = (props: {
  position: { x: number; y: number };
  title: number;
}) => {
  const [position, setPosition] = useState(0);

  return (
    <div
      className="block"
      onClick={() => setPosition((position) => position + 1)}
      style={{
        transform:
          "translate(" +
          ((props.position.x * 21)+8.5)+
          "vh, " +
          ((props.position.y * 21)+8.5)+
          "vh)",
      }}
    >
      <div>{props.title}</div>
    </div>
  );
};
