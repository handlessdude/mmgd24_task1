import { Shape2d } from 'src/entities/shape2d';
import { Vector2d } from 'src/models/linal';

class RegularPolygon extends Shape2d {
  public readonly side: number;

  constructor(x: number, y: number, side: number, velocity: Vector2d) {
    super(x, y, velocity);
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
