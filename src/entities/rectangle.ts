import { Shape2d } from 'src/entities/shape2d';
import { Color } from 'src/models/color';
import { Vector2d } from 'src/models/linal';

export default class Rectangle extends Shape2d {
  public readonly w: number;
  public readonly h: number;

  constructor(
    x: number,
    y: number,
    w: number,
    h: number,
    velocity: Vector2d = { x: 0, y: 0 },
    color: Color = '#000000',
  ) {
    super(x, y, velocity, color);
    this.w = w;
    this.h = h;
  }

  get left() {
    return this.x;
  }

  get right() {
    return this.x + this.w;
  }

  get top() {
    return this.y;
  }

  get bottom() {
    return this.y + this.h;
  }

  contains(point: Vector2d) {
    return (
      point.x >= this.x &&
      point.x < this.x + this.w &&
      point.y >= this.y &&
      point.y < this.y + this.h
    );
  }

  intersects(shape: Shape2d) {
    if (shape instanceof Rectangle)
      return (
        this.x < shape.x + shape.w &&
        shape.x < this.x + this.w &&
        this.y < shape.y + shape.h &&
        shape.y < this.y + this.w
      );
    return false;
  }
}
