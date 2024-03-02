interface Vector2d {
  x: number;
  y: number;
}

interface BoundingBox {
  left: number;
  right: number;
  top: number;
  bottom: number;
}

interface Polygon {
  points: Vector2d[];
}

export type { Vector2d, BoundingBox, Polygon };
