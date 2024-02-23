import { Color } from 'src/models/color';
import { Vector2d } from 'src/models/linal';

class Shape2d {
  public x: number;
  public y: number;
  public color: Color; // TODO move to decorator
  public velocity: Vector2d;

  constructor(
    x: number,
    y: number,
    velocity: Vector2d,
    color: Color = '#000000',
  ) {
    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.color = color;
  }
}

export { Shape2d };
