import { Shape2d } from 'src/entities/shape2d';
import { BoundingBox, Polygon, Vector2d } from 'src/models/linal';
import {
  AABBOverlap,
  doCirclePolygonCollide,
  doPolygonsCollide,
} from 'src/utils/collisions';
import { Circle } from 'src/entities/circle';

export default class Rectangle extends Shape2d {
  public readonly w: number;
  public readonly h: number;

  constructor(
    x: number,
    y: number,
    w: number,
    h: number,
    velocity: Vector2d = { x: 0, y: 0 },
  ) {
    super(x, y, velocity);
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

  get points() {
    return [
      { x: this.left, y: this.bottom },
      { x: this.left, y: this.top },
      { x: this.right, y: this.top },
      { x: this.right, y: this.bottom },
    ];
  }

  get boundingBox() {
    return {
      top: this.top,
      bottom: this.bottom,
      left: this.left,
      right: this.right,
    };
  }

  contains(point: Vector2d) {
    return (
      point.x >= this.x &&
      point.x <= this.x + this.w &&
      point.y >= this.y &&
      point.y <= this.y + this.h
    );
  }

  intersects(shape: BoundingBox & Polygon) {
    if (shape instanceof Circle) return doCirclePolygonCollide(shape, this);
    return doPolygonsCollide(this, shape);
  }
}
