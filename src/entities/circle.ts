import { Shape2d } from 'src/entities/shape2d';
import { Color } from 'src/models/color';
import { Vector2d } from 'src/models/linal';

class Circle extends Shape2d {
  public readonly radius: number;

  constructor(
    x: number,
    y: number,
    radius: number,
    velocity: Vector2d,
    color: Color = '#000000',
  ) {
    super(x, y, velocity, color);
    this.radius = radius;
  }

  get center() {
    return {
      x: this.x,
      y: this.y,
    };
  }
  get left() {
    return this.x - this.radius;
  }

  get right() {
    return this.x + this.radius;
  }

  get top() {
    return this.y - this.radius;
  }

  get bottom() {
    return this.y + this.radius;
  }

  contains(p: Vector2d) {
    return (
      Math.pow(this.x - p.x, 2) + Math.pow(this.y - p.y, 2) <=
      Math.pow(this.radius, 2)
    );
  }

  intersects(/*shape: Shape2d*/) {
    // if (shape instanceof Rectangle)
    //   return (
    //     this.x < shape.x + shape.w &&
    //     shape.x < this.x + this.w &&
    //     this.y < shape.y + shape.h &&
    //     shape.y < this.y + this.w
    //   );
    return false;
  }
}

export { Circle };
