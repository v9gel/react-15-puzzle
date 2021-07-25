import { makeAutoObservable } from "mobx";
import click from '../click.mp3';

interface Position {
  x: number;
  y: number;
}
interface Block {
  position: Position;
  title: number;
  draggable: boolean;
}

class Puzzle {
  blocks = [
    {
      position: { x: 0, y: 0 },
      title: 1,
      draggable: false,
    },
    {
      position: { x: 1, y: 0 },
      title: 2,
      draggable: false,
    },
    {
      position: { x: 2, y: 0 },
      title: 3,
      draggable: false,
    },
    {
      position: { x: 3, y: 0 },
      title: 4,
      draggable: false,
    },
    {
      position: { x: 0, y: 1 },
      title: 5,
      draggable: false,
    },
    {
      position: { x: 1, y: 1 },
      title: 6,
      draggable: false,
    },
    {
      position: { x: 2, y: 1 },
      title: 7,
      draggable: false,
    },
    {
      position: { x: 3, y: 1 },
      title: 8,
      draggable: false,
    },
    {
      position: { x: 0, y: 2 },
      title: 9,
      draggable: false,
    },
    {
      position: { x: 1, y: 2 },
      title: 10,
      draggable: false,
    },
    {
      position: { x: 2, y: 2 },
      title: 11,
      draggable: false,
    },
    {
      position: { x: 3, y: 2 },
      title: 12,
      draggable: true,
    },
    {
      position: { x: 0, y: 3 },
      title: 13,
      draggable: false,
    },
    {
      position: { x: 1, y: 3 },
      title: 14,
      draggable: false,
    },
    {
      position: { x: 2, y: 3 },
      title: 15,
      draggable: true,
    },
  ] as Block[];
  freePosition = { x: 3, y: 3 };
  countMoves = 0;

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
    if (draggableBlockPosition) {
      let draggableBlock = this.blocks.find(
        (e) =>
          e.position.x === draggableBlockPosition?.x &&
          e.position.y === draggableBlockPosition?.y
      ) as Block;
      let tempPosition = {
        x: draggableBlock.position.x,
        y: draggableBlock.position.y,
      };
      draggableBlock.position.x = this.freePosition.x;
      draggableBlock.position.y = this.freePosition.y;
      this.freePosition = tempPosition;

      this.blocks.map((e) => {
        e.draggable = false;
      });

      this.draggablePositions.map((d) => {
        this.blocks.map((e) => {
          if (e.position.x === d.x && e.position.y === d.y) {
            e.draggable = true;
          }
        });
      });
      this.countMoves++;
      new Audio(click).play()
    }
  }
}

export default new Puzzle();
