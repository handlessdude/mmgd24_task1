import { BoundingBox, Vector2d } from 'src/models/linal';

const clip = (x: number, lower: number, upper: number) =>
  Math.max(Math.min(x, upper), lower);

const negate = (vec: Vector2d) => ({
  x: -vec.x,
  y: -vec.y,
});

const getFromInterval = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const genNSamples = <T>(n: number, factory: () => T): Array<T> =>
  Array.from({ length: n }, factory);

const AABBOverlap = (a: BoundingBox, b: BoundingBox) => {
  const d1x = b.left - a.right;
  const d1y = b.top - a.bottom;
  const d2x = a.left - b.right;
  const d2y = a.top - b.bottom;
  if (d1x > 0.0 || d1y > 0.0) return false;
  if (d2x > 0.0 || d2y > 0.0) return false;
  return true;
};

export { clip, getFromInterval, genNSamples, negate, AABBOverlap };
