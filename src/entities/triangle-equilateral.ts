import { RegularPolygon } from 'src/entities/regular-polygon';

class TriangleEquilateral extends RegularPolygon {
  get height() {
    return (Math.sqrt(3) / 2) * this.side;
  }

  get left() {
    return this.x - this.side / 2;
  }

  get right() {
    return this.x + this.side / 2;
  }

  get top() {
    return this.y - (2 * this.height) / 3;
  }

  get bottom() {
    return this.y + this.height / 3;
  }

  contains(/*p: Vector2d*/) {
    return false;
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

export { TriangleEquilateral };
