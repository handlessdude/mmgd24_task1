import { RegularPolygon } from 'src/entities/regular-polygon';

class Hexagon extends RegularPolygon {
  get height() {
    return 2 * (Math.sqrt(3) / 2) * this.side;
  }

  get left() {
    return this.x - this.side;
  }

  get right() {
    return this.x + this.side;
  }

  get top() {
    return this.y - this.height / 2;
  }

  get bottom() {
    return this.y + this.height / 2;
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

export { Hexagon };
