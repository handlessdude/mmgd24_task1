import { Shape2d } from 'src/entities/shape2d';
import { BoundingBox, Vector2d } from 'src/models/linal';
import { AABBOverlap } from 'src/utils';

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

  intersects(shape: BoundingBox) {
    return AABBOverlap(this.boundingBox, shape);
    // if (shape instanceof Rectangle)
    //   return (
    //     this.x < shape.x + shape.w &&
    //     shape.x < this.x + this.w &&
    //     this.y < shape.y + shape.h &&
    //     shape.y < this.y + this.w
    //   );
    // return false;
  }
}

export { Circle };
