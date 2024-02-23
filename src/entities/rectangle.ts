import { Point } from 'src/entities/point';
import { Shape2d } from 'src/entities/shape2d';
import { Color } from 'src/models/color';

export default class Rectangle extends Shape2d {
  public readonly w: number;
  public readonly h: number;
  public readonly vx: number;
  public readonly vy: number;

  constructor(
    x: number,
    y: number,
    w: number,
    h: number,
    vx: number,
    vy: number,
    color: Color = '#000000',
  ) {
    super(x, y, color);
    this.w = w;
    this.h = h;
    this.vx = vx;
    this.vy = vy;
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

  contains(point: Point) {
    return (
      point.x >= this.x &&
      point.x < this.x + this.w &&
      point.y >= this.y &&
      point.y < this.y + this.h
    );
  }

  intersects(rect: Rectangle) {
    return (
      this.x < rect.x + rect.w &&
      rect.x < this.x + this.w &&
      this.y < rect.y + rect.h &&
      rect.y < this.y + this.w
    );
  }
}
