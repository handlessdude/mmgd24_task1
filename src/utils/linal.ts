import { Vector2d } from 'src/models/linal';

const sub = (v1: Vector2d, v2: Vector2d): Vector2d => ({
  x: v1.x - v2.x,
  y: v1.y - v2.y,
});

const add = (v1: Vector2d, v2: Vector2d): Vector2d => ({
  x: v1.x + v2.x,
  y: v1.y + v2.y,
});

const normalize = (v: Vector2d): Vector2d => {
  const length = Math.sqrt(v.x * v.x + v.y * v.y);
  return { x: v.x / length, y: v.y / length };
};

const getNormalToVec = (vec: Vector2d) => {
  const normal = { x: -vec.y, y: vec.x };
  return normalize(normal);
};

const mult = (v: Vector2d, k: number): Vector2d => {
  return { x: v.x * k, y: v.y * k };
};

const dot = (v1: Vector2d, v2: Vector2d): number => v1.x * v2.x + v1.y * v2.y;

const pointsDistance = (v1: Vector2d, v2: Vector2d): number => {
  const dx = v2.x - v1.x;
  const dy = v2.y - v1.y;
  return Math.sqrt(dx * dx + dy * dy);
};

const arMean = (points: Vector2d[]): Vector2d => {
  const total = points.reduce(
    (acc, cur) => {
      acc.x += cur.x;
      acc.y += cur.y;
      return acc;
    },
    { x: 0, y: 0 },
  );

  return { x: total.x / points.length, y: total.y / points.length };
};

export {
  sub,
  dot,
  arMean,
  normalize,
  pointsDistance,
  add,
  mult,
  getNormalToVec,
};
