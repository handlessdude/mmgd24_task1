import { Vector2d } from 'src/models/linal';

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

export { clip, getFromInterval, genNSamples, negate };
