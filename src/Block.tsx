import React, { useState } from "react";
import "./Block.css";
import { observer } from "mobx-react-lite";
import puzzle from "./store/puzzle";

const Block = observer(
  (props: {
    position: { x: number; y: number };
    title: number;
    draggable: boolean;
  }) => {
    return (
      <div
        className={"block" + (props.draggable ? " draggable" : "")}
        onClick={() => puzzle.draggable(props.position)}
        style={{
          transform:
            "translate(" +
            (props.position.x * 21 + 8.5) +
            "vh, " +
            (props.position.y * 21 + 8.5) +
            "vh)",
        }}
      >
        <div>{props.title}</div>
      </div>
    );
  }
);

export default Block;
