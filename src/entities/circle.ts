import { Shape2d } from 'src/entities/shape2d';
import { BoundingBox, Polygon, Vector2d } from 'src/models/linal';
import {
  checkCirclesCollision,
  doCirclePolygonCollide,
} from 'src/utils/collisions';

class Circle extends Shape2d {
  public readonly radius: number;

  constructor(x: number, y: number, radius: number, velocity: Vector2d) {
    super(x, y, velocity);
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

  get boundingBox() {
    return {
      top: this.top,
      bottom: this.bottom,
      left: this.left,
      right: this.right,
    };
  }

  intersects(shape: BoundingBox & Polygon) {
    if (shape instanceof Circle) return checkCirclesCollision(this, shape);
    return doCirclePolygonCollide(this, shape);
  }
}

export { Circle };
