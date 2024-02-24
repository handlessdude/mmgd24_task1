import { BoundingBox, Vector2d } from 'src/models/linal';

abstract class Shape2d {
  public x: number;
  public y: number;
  public velocity: Vector2d;
  public health: number; // TODO move to decorator

  constructor(x: number, y: number, velocity: Vector2d) {
    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.health = 3;
  }

  abstract intersects(shape: BoundingBox): boolean;
}

export { Shape2d };
