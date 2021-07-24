import { makeAutoObservable } from "mobx";

interface Position {
  x: number;
  y: number;
}
interface Block {
  position: Position;
  title: number;
}

class Puzzle {
  blocks = [
    {
      position: { x: 0, y: 0 },
      title: 1,
    },
    {
      position: { x: 1, y: 0 },
      title: 2,
    },
    {
      position: { x: 2, y: 0 },
      title: 3,
    },
    {
      position: { x: 3, y: 0 },
      title: 4,
    },
    {
      position: { x: 0, y: 1 },
      title: 5,
    },
    {
      position: { x: 1, y: 1 },
      title: 6,
    },
    {
      position: { x: 2, y: 1 },
      title: 7,
    },
    {
      position: { x: 3, y: 1 },
      title: 8,
    },
    {
      position: { x: 0, y: 2 },
      title: 9,
    },
    {
      position: { x: 1, y: 2 },
      title: 10,
    },
    {
      position: { x: 2, y: 2 },
      title: 11,
    },
    {
      position: { x: 3, y: 2 },
      title: 12,
    },
    {
      position: { x: 0, y: 3 },
      title: 13,
    },
    {
      position: { x: 1, y: 3 },
      title: 14,
    },
    {
      position: { x: 2, y: 3 },
      title: 15,
    },
  ] as Block[];

  freePosition = { x: 3, y: 3 };

  constructor() {
    makeAutoObservable(this);
  }

  get draggablePositions() {
    return [
      { x: this.freePosition.x - 1, y: this.freePosition.y },
      { x: this.freePosition.x, y: this.freePosition.y - 1 },
      { x: this.freePosition.x + 1, y: this.freePosition.y },
      { x: this.freePosition.x, y: this.freePosition.y + 1 },
    ];
  }

  draggable(position: Position) {
    let draggableBlockPosition = this.draggablePositions.find(
      (e) => e.x === position.x && e.y === position.y
    );
    if (draggableBlockPosition as Position) {
      let draggableBlock = this.blocks.find(
        (e) => e.position.x === draggableBlockPosition.x && e.position.y === draggableBlockPosition.y
      ) as Block;
      let tempPosition = {
        x: draggableBlock.position.x,
        y: draggableBlock.position.y,
      };
      draggableBlock.position.x = this.freePosition.x;
      draggableBlock.position.y = this.freePosition.y;
      this.freePosition = tempPosition;
    }
  }
}

export default new Puzzle();
