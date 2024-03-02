import { RegularPolygon } from 'src/entities/regular-polygon';
import { BoundingBox, Polygon } from 'src/models/linal';
import { Circle } from 'src/entities/circle';
import {
  AABBOverlap,
  doCirclePolygonCollide,
  doPolygonsCollide,
} from 'src/utils/collisions';

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

  get points() {
    return [
      { x: this.left, y: this.bottom },
      { x: (this.left + this.right) / 2, y: this.top },
      { x: this.right, y: this.bottom },
    ];
  }

  contains(/*p: Vector2d*/) {
    return false;
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
    const mightBeColliding = AABBOverlap(this.boundingBox, shape);
    if (!mightBeColliding) return false;
    if (shape instanceof Circle) return doCirclePolygonCollide(shape, this);
    return doPolygonsCollide(this, shape);
  }
}

export { TriangleEquilateral };
