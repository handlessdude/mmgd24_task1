import { Shape2d } from 'src/entities/shape2d';
import { Vector2d } from 'src/models/linal';
import { Color } from 'src/models/color';

class RegularPolygon extends Shape2d {
  public readonly side: number;

  constructor(
    x: number,
    y: number,
    side: number,
    velocity: Vector2d,
    color: Color = '#000000',
  ) {
    super(x, y, velocity, color);
    this.side = side;
    this.velocity = velocity;
  }

  get center() {
    return {
      x: this.x,
      y: this.y,
    };
  }
}

export { RegularPolygon };
