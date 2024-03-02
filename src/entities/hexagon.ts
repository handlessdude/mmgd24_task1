import { RegularPolygon } from 'src/entities/regular-polygon';
import { BoundingBox, Polygon } from 'src/models/linal';
import { Circle } from 'src/entities/circle';
import {
  AABBOverlap,
  doCirclePolygonCollide,
  doPolygonsCollide,
} from 'src/utils/collisions';

const angleDeg = 60; // Angle between each side of the hexagon

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

  get points() {
    return Array.from({ length: 6 }, (_, i) => {
      const angleRad = (Math.PI / 180) * (angleDeg * i);
      const x = this.x + this.side * Math.cos(angleRad);
      const y = this.y + this.side * Math.sin(angleRad);
      return { x, y };
    });
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

export { Hexagon };
